import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "../components/modal";
import { useTranslation } from 'react-i18next';

import '../css/Forms.css';
import config from "../config/config.json";
import DataContext from "../context/ContextConnection";
import { Box, Button, TextField, Grid } from "@mui/material";

function Connection() {
    const { setUser } = useContext(DataContext);
    const { t, i18n } = useTranslation();

    const [dataIsCorrect, setDataIsCorrect] = useState(false)
    const [show, setShow] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const [state, setState] = useState({ login: "", mdp: "" });

    const navigate = useNavigate();

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        let nstate = { ...state }
        nstate[name] = value;
        setState(nstate);
    }

    function signUp(event) {
        event.preventDefault();
        navigate('/signup');
    }

    function connect(event) {
        event.preventDefault();
        setDataIsCorrect(true);
    }
    const showModal = () => {
        setShow(true);
        setModalMessage("Sorry can't signup")
    }

    useEffect(() => {
        async function Connect(url, value) {
            let res = await fetch(url + "/login", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(value)
            })
            let status = res.status;
            let jsonres = await res.json();
            console.log(jsonres);

            if (status === 200) {
                setUser({
                    id: jsonres.id,
                    role: jsonres.role,
                    token: jsonres.token
                });
                setModalMessage(t(jsonres.message));
                navigate('/dashboard');
            }
            else {
                setShow(true);
                setModalMessage(t(jsonres.message))
                console.log(jsonres);
                setDataIsCorrect(false);
            }
        }
        if (dataIsCorrect === true) {
            Connect(config.api_url, { email: state.login, password: state.mdp });
        }
    }, [dataIsCorrect, config, navigate, setUser, state.login, state.mdp, t, setDataIsCorrect])


    return (
        <main>
            <section className="bgLogin">
                <article className='loginForm'>
                    <h2>{t('connection')}</h2>
                    <Box
                        component="form"
                        sx={{}}
                        noValidate
                        autoComplete='off'
                        onSubmit={connect}
                        className='gridForm'
                    >

                        <TextField
                            label={t('email')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '40ch' }}
                            // variant='standard'
                            // fullWidth
                            name='login'
                            value={state.login}
                            onChange={handleInputChange}
                            color="success"
                            required
                        />
                        <TextField
                            label={t('password')}
                            type="password"
                            size='small'
                            sx={{ m: 1, width: '40ch' }}
                            // variant='standard'
                            // fullWidth
                            name='mdp'
                            value={state.mdp}
                            onChange={handleInputChange}
                            color="success"
                            required
                        />
                        <div className="buttonContainer">

                            <Button
                                className="loginButton"
                                variant="contained"
                                children={t('connection')}
                                type="submit"
                                color="success"
                            />
                        </div>

                        <div className='subscribe'>

                            <span>{t("subscribe")}</span>
                            <Button
                                children={t('signup')}
                                type="submit"
                                color="success"
                                onClick={showModal}
                            />
                        </div>

                    </Box>
                </article>


                <Modal title="Error" onClose={() => setShow(false)} show={show} textBody={modalMessage}>

                </Modal>
            </section>

        </main>
    );
}



export default Connection;