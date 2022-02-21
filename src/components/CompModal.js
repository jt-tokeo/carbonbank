import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import '../css/Modal.css';
import ModUser from "./ModUser";
import ModProject from "./ModProject";
import DelUser from "./DelUser";
import DelProject from "./DelProject";

// https://dev.to/viclafouch/build-a-complete-modal-component-with-react-hooks-2fk8
// https://www.kaherecode.com/tutorial/creer-votre-propre-composant-modal-avec-react-hooks


const CompModal = props => {

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          {
            props.act ==="add"?(
            props.comp==="user"?<ModUser id={0} onClose={props.onClose}></ModUser>:
            props.comp==="project"?<ModProject id={0} userId={props.userId} onClose={props.onClose}></ModProject>:
              <></>):
            props.act ==="modify"?(
            props.comp==="user"?<ModUser id={props.id} onClose={props.onClose}></ModUser>:
            props.comp==="project"?<ModProject id={props.id} userId={0} onClose={props.onClose}></ModProject>:
            <></>):
            props.act ==="delete"?(
            props.comp==="user"?<DelUser id={props.id} onClose={props.onClose}></DelUser>:
            props.comp==="project"?<DelProject id={props.id} onClose={props.onClose}></DelProject>:
            <></>):
            <></>
          }
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default CompModal;
