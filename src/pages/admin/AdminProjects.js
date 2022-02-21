import '../../css/Forms.css';
import config from "../../config/config.json";
import { useState,useEffect, useContext } from "react";
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import CompModal from '../../components/CompModal';
import DataContext from '../../context/ContextConnection';

function AdminProjects() {
    const { user } = useContext(DataContext);
    const { t, i18n } = useTranslation();
    const [state, setState] = useState({projects:[]});
    const [modProject,setModProject] = useState(0);
    const [show,setShow]= useState(false);
    const [act,setAct] = useState("");
    /*const history = useHistory();

    useEffect(()=>{
        if(authUser.role!="admin")
        history.push('/home');
    },undefined);*/

    async function getProjects(){
        if(user.role=="admin")
        {
            let res = await fetch(config.api_url + "/admin/projects", {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + user.token,
                }
            })
            let status = res.status; 
            let jsonres = await res.json();
            if (status === 200) setState({projects:jsonres.projects});
            else {
                     //handle error
            }
        }
    }
    function handleModProject(id){
        return (event)=>{
            event.preventDefault()
            setModProject(id);
            setAct('modify');
            setShow(true);
        }
    };
    function handleDelProject(id){
        return (event)=>{
            event.preventDefault()
            setModProject(id);
            setAct('delete');
            setShow(true);
        }
    };
    useEffect(()=>getProjects(),[]);
    return (
       <>
       <h3>Projects</h3>
       <table>
           <thead>
                <tr>
                    <th>{t('name')}</th>
                    <th>{t('description')}</th>
                    <th>{t('country')}</th>
                    <th></th>
                </tr>
           </thead>
           <tbody>
                {state.projects.map((project)=>
                <tr key={project._id}>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td>{project.country}</td>
                    <td>
                        <button onClick={handleModProject(project._id)}>modifier</button>
                        <button onClick={handleDelProject(project._id)}>supprimer</button>
                    </td>
                </tr>
                )}
           </tbody>

       </table>
       <CompModal title="ModProject" onClose={() => {setShow(false);getProjects();}} act={act} show={show} comp="project" id={modProject} >

        </CompModal>
       </>
    );
}

export default AdminProjects;