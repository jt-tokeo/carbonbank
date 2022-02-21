import { useTranslation } from 'react-i18next';
import config from "../config/config.json";
import { useContext, useState } from "react";
import Modal from './modal';
import DataContext from "../context/ContextConnection";


function DelUser (props){
    const { user } = useContext(DataContext);
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    async function handleDelete(event)
    {
        event.preventDefault();
        if(user.role=="admin")
        {
            let res = await fetch(config.api_url + "/admin/user/"+props.id, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + user.token,
                }
            })
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
    return (
        <>
        <p>voulez vous vraiment supprimer cet utilisateur?</p>
        <button onClick={handleDelete}>Supprimer</button><button onClick={props.onClose}>Annuler</button>
        <Modal title="Error" onClose={() => setShow(false)} show={show} textBody={modalMessage}>

        </Modal>
        </>
    );
}
export default DelUser;