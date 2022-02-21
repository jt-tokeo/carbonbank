import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import config from "../config/config.json";
import DataContext, { ContextConnection } from '../context/ContextConnection';
import Modal from './modal';

function ModProject(props){

    const { user } = ContextConnection(DataContext);
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [project,setProject] = useState({
        name: "",
        description:"",
        address: "",
        country: "",
        city:"",
        zipCode: "",
        estimatedFundVolume:"",
        expectedRevenue:"",
        latitude:0.0,
        longitude:0.0

    })


    async function getProject(){
        if(user.role=="admin")
        {
            let res = await fetch(config.api_url + "/admin/project/"+props.id, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + user.token,
                }
            })
            let status = res.status; 
            let jsonres = await res.json();
            if (status === 200) {
                delete jsonres._id;
                setProject(jsonres);
            }
            else {
                setModalMessage(t(jsonres.message));
                setShow(true);
            }
        }
    }

    useEffect(()=>{
        if(props.id == 0) setProject({userId : props.userId,...project});
        else getProject();
    },[]);

    async function validateForm(event){
        event.preventDefault();
        let route = "";
        let method = "";
        if(props.id==0){
            route = "/admin/project";
            method = "POST";
        }
        else{
            route = "/admin/project/"+props.id;
            method = "PUT";
        }
        if(user.role=="admin"){
            let res = await fetch(config.api_url + route, {
                method: method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + user.token,
                    
                },
                body: JSON.stringify(project)
            });
            
            let status = res.status; 
            let jsonres = await res.json();
            if (status === 200) {
                props.onClose();
            }
            else {
                setModalMessage(t(jsonres.message));
                setShow(true);
            }
        }
        
    }
    function handleInputChange(event){
        event.preventDefault();
        let value = event.target.value;
        const name = event.target.name;
        let nproject = { ...project }
        if(name=="latitude"||name=="longitude"){
            value = Math.trunc(value*1000000)/1000000;
        }
        nproject[name] = value;
        setProject(nproject);
    }

    return (
        <>
        <section >
            <form onSubmit={validateForm} className="modForm">
                <div>
                    <input type="text" name="name" id="name" value={project.name} onChange={handleInputChange}></input>
                    <label>{t('name')}</label>
                </div>
                <div>
                    <input type="text" name="description" id="description" value={project.description} onChange={handleInputChange}></input>
                    <label>{t('description')}</label>
                </div>
                <div>
                    <input type="text" name="address" id="address" value={project.address} onChange={handleInputChange}></input>
                    <label>{t('address')}</label>
                </div>
                <div>
                    <input type="text" name="country" id="country" value={project.country} onChange={handleInputChange}></input>
                    <label>{t('country')}</label>
                </div>
                <div>
                    <input type="text" name="city" id="city" value={project.city} onChange={handleInputChange}></input>
                    <label>{t('city')}</label>
                </div>
                <div>
                    <input type="text" name="zipCode" id="zipCode" value={project.zipCode} onChange={handleInputChange}></input>
                    <label>{t('zipCode')}</label>
                </div>
                <div>
                    <input type="text" name="estimatedFundVolume" id="estimatedFundVolume" value={project.estimatedFundVolume} onChange={handleInputChange}></input>
                    <label>{t('estimatedFundVolume')}</label>
                </div>
                <div>
                    <input type="text" name="expectedRevenue" id="expectedRevenue" value={project.expectedRevenue} onChange={handleInputChange}></input>
                    <label>{t('expectedRevenue')}</label>
                </div>
                <div>
                    <input type="number" name="latitude" id="latitude" step="0.000001" min="-90.000000" max="90.000000" value={project.latitude} onChange={handleInputChange}></input>
                    <label>{t('latitude')}</label>
                </div>
                <div>
                    <input type="number" name="longitude" id="longitude" step="0.000001" min="-180.000000" max="180.000000" value={project.longitude} onChange={handleInputChange}></input>
                    <label>{t('longitude')}</label>
                </div>
                <div>
                <input type="button" value="annuler" onClick={props.onClose}></input><input type="submit" value="valider"></input>
                </div>
            </form>
        </section>
        <Modal title="Error" onClose={() => setShow(false)} show={show} textBody={modalMessage}>

        </Modal></>

    );
}

export default ModProject;