import '../../css/Forms.css';
import config from "../../config/config.json";
import { useState,useEffect, useContext } from "react";
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import CompModal from '../../components/CompModal';
import DataContext from '../../context/ContextConnection';

function AdminUsers() {

    const { user } = useContext(DataContext);
    const { t, i18n } = useTranslation();
    const [state, setState] = useState({users:[]});
    const [modUser,setModUser] = useState(0);
    const [act,setAct] = useState("");
    const [show,setShow]= useState(false);
    const [comp,setComp]=useState('user');
    const [projectUserId,setProjectUserId]=useState(0);
    /*const history = useHistory();

    
    useEffect(()=>{
        if(authUser.role!="admin")
        history.push('/home');
    },undefined);*/
    

    async function getUsers(){
        if(user.role=="admin")
        {
            let res = await fetch(config.api_url + "/admin/users", {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + user.token,
                }
            })
            let status = res.status; 
            let jsonres = await res.json();
            if (status === 200) setState({users:jsonres.users});
            else {
                     //handle error
            }
        }
    }
    function handleAddUser(event){
            event.preventDefault()
            setModUser(0);
            setAct("add");
            setComp("user");
            setProjectUserId(0);
            setShow(true);
    };
    function handleAddProject(id){
        return (event)=>{
            event.preventDefault()
            setModUser(0);
            setComp("project");
            setProjectUserId(id);
            setAct("add");
            setShow(true);
        }
    };
    function handleModUser(id){
        return (event)=>{
            event.preventDefault()
            setModUser(id);
            setComp("user");
            setProjectUserId(0);
            setAct("modify");
            setShow(true);
        }
    };
    function handleDelUser(id){
        return (event)=>{
            event.preventDefault()
            setModUser(id);
            setComp("user");
            setProjectUserId(0);
            setAct("delete");
            setShow(true);
        }
    };
    useEffect(()=>getUsers(),[]);
   
    return (
        <>
            <h3>Users</h3>
            <button onClick={handleAddUser}>Add</button>
            <table>
                <thead>
                        <tr>
                            <th>{t('name')} {t('firstName')}</th>
                            <th>{t('companyName')}</th>
                            <th>{t('country')}</th>
                            <th>{t('email')}</th>
                            <th>{t('password')}</th>
                            <th>{t('role')}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                </thead>
                <tbody>
                        {state.users.map((user)=>
                        <tr key={user._id}>
                            <td>{user.name} {user.firstName}</td>
                            <td>{user.companyName}</td>
                            <td>{user.country}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.role}</td>
                            <td><button onClick={handleModUser(user._id)}>modifier</button></td>
                            <td>{user.role=="holder"?<button onClick={handleAddProject(user._id)}>ajouter Projet</button>:<></>}</td>
                            <td><button onClick={handleDelUser(user._id)}>supprimer</button></td>
                        </tr>
                        )}
                </tbody>

            </table>
            <CompModal title={
                act==="modify"?"ModUser":
                act==="delete"?"DelUser":
                act==="add"?
                    comp==="user"?"AddUser":
                    comp==="project"?"AddProject":
                    "":
                ""}
                onClose={() => {
                    setShow(false);
                    getUsers();
                    }}
                show={show} comp={comp} id={modUser} act={act} userId={projectUserId}>

            </CompModal>
        </>
    );
}

export default AdminUsers;