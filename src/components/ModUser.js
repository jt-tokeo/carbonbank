import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import config from "../config/config.json";
import DataContext from '../context/ContextConnection';
import Modal from './modal';

function ModUser(props){

    const { user } = useContext(DataContext);
    const { t, i18n } = useTranslation();
    
    const [values,setValues] = useState({
        email: "",
        password: "",
        role: "", 
        companyName :"",
        name: "",
        firstName: "",
        phone: "",
        address: "",
        country: "",
        city:"",
        zipCode: ""
    })
    const [show, setShow] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    async function getUser(){
        if(user.role=="admin")
        {
            let res = await fetch(config.api_url + "/user/"+props.id, {
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
                setValues(jsonres);
            }
            else {
                setModalMessage(t(jsonres.message));
                setShow(true);
            }
        }
    }

    useEffect(()=>{if(props.id != 0)getUser()},[]);

    async function validateForm(event){
        event.preventDefault();
        let route = "";
        let method = "";
        if(props.id==0){
            route = "/admin/user";
            method = "POST";
        }
        else{
            route = "/admin/user/"+props.id;
            method = "PUT";
        }
        if(user.role=="admin"){
            let res = await fetch(config.api_url + route, {
                method: method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + user.token,
                    
                },
                body: JSON.stringify(values)
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
        const value = event.target.value;
        const name = event.target.name;
        let nuser = { ...values }
        nuser[name] = value;
        setValues(nuser);
    }

    return (
        <>
        <section >
            <form onSubmit={validateForm} className="modForm">
                <div>
                    <input type="text" name="email" id="email" value={values.email} onChange={handleInputChange}></input>
                    <label>{t('email')}</label>
                </div>
                <div>
                    <input type="text" name="password" id="password" value={values.password} onChange={handleInputChange}></input>
                    <label>{t('password')}</label>
                </div>
                <div>
                    <input type="text" name="role" id="role" value={values.role} onChange={handleInputChange}></input>
                    <label>{t('role')}</label>
                </div>
                <div>
                    <input type="text" name="companyName" id="companyName" value={values.companyName} onChange={handleInputChange}></input>
                    <label>{t('companyName')}</label>
                </div>
                <div>
                    <input type="text" name="name" id="name" value={values.name} onChange={handleInputChange}></input>
                    <label>{t('name')}</label>
                </div>
                <div>
                    <input type="text" name="firstName" id="firstName" value={values.firstName} onChange={handleInputChange}></input>
                    <label>{t('firstName')}</label>
                </div>
                <div>
                    <input type="text" name="phone" id="phone" value={values.phone} onChange={handleInputChange}></input>
                    <label>{t('phone')}</label>
                </div>
                <div>
                    <input type="text" name="address" id="address" value={values.address} onChange={handleInputChange}></input>
                    <label>{t('address')}</label>
                </div>
                <div>
                    <input type="text" name="country" id="country" value={values.country} onChange={handleInputChange}></input>
                    <label>{t('country')}</label>
                </div>
                <div>
                    <input type="text" name="city" id="city" value={values.city} onChange={handleInputChange}></input>
                    <label>{t('city')}</label>
                </div>
                <div>
                    <input type="text" name="zipCode" id="zipCode" value={values.zipCode} onChange={handleInputChange}></input>
                    <label>{t('zipCode')}</label>
                </div>
                <div>
                <input type="button" value="annuler" onClick={props.onClose}></input><input type="submit" value="valider"></input>
                </div>
            </form>
        </section>
        <Modal title="Error" onClose={() => setShow(false)} show={show} textBody={modalMessage}>

        </Modal>
        </>
    );
}

export default ModUser;