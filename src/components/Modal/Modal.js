import React, { useState } from 'react';

const Modal = (props) => {
    // change the state of the modal
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="modal">
            {/* if isOpen is false open the modal and I use two div for make the close clic the modal*/}
            <button className={props.class} onClick={() => setIsOpen(!isOpen)}>{props.button}</button>
            {isOpen ? (
                <div className="addtest">
                    <div className="modal01 modalCom">
                        {props.title ? <h3>{props.title}</h3> : null}
                        {props.data}
                        {props.btclose? <button onClick={() => setIsOpen(false)}>{props.close}</button> : null}
                    </div>
                    {props.close? <div className='badmodal' onClick={() => setIsOpen(false)}></div>: null}
                </div>
            ) : null}
        </div>
    );
};

export default Modal;