import '../css/Forms.css';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/**illustration**/
import picto_Invest_01 from '../media/illustration/illustration_invest_01.svg';
import picto_Contact_01 from '../media/illustration/illustration_contact_01.svg';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

function Contact() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        companyname: "",
        email: "",
        manytonnes: "",
        message: "",
    });

    function validateForm(event) {
        if (state.name !== "" && state.email !== "" && state.subject !== "" && state.message !== "") {
            let body = {
                name: state.name,
                email: state.email,
                manytonnes: state.manytonnes,
                message: state.message
            };

            let status;
            fetch("http://51.75.13.164:3024/signup", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(body)
            })
                .then(res => { status = res.status; return res.json() })
                .then(jsonres => { if (status === 200) navigate('/connection') });
        }
        event.preventDefault();
    }

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        let nstate = { ...state }
        nstate[name] = value;
        setState(nstate);
    }
    return (

        <main>
            <section className="home">
                <article className="col5">
                    <h3 className="col1 marginB005">You are starting the challenging process of decarbonizing your operations/ activities ?</h3>
                    <h3 className="col1">You are searching funding for a carbon sequestration project ?</h3>
                    <h3 className="col1">You want to invest in carbon offsets commodity by supporting sequestration projects ? </h3>
                    <h3 className="col1">You have questions regarding the projects listed on our website ? </h3>
                    <p className="h1P col7">Please contact us here.</p>
                </article>
                <img className="col2P" src={picto_Contact_01} alt=""></img>
            </section>

            <div className="col1 lignEndPicto">
                <div></div>
            </div>

            <section className="displayCollumCenterV">
                <h3 className="col1 textCenter">Contact us</h3>

                <form className="col4 displayFlexSpace" onSubmit={validateForm} required>

                    <Box
                        component="form"
                        sx={{}}
                        noValidate
                        autoComplete='off'
                    >
                        <div>
                            <TextField
                                label={t('companyName')}
                                type="text"
                                size='small'
                                sx={{ m: 1 }}
                                fullWidth
                                variant='standard'
                                name='companyname'
                                value={state.companyname}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                label={t('name')}
                                type="text"
                                size='small'
                                sx={{ m: 1, width: '24.5ch' }}
                                variant='standard'
                                name='name'
                                value={state.name}
                                onChange={handleInputChange}
                                required
                            />
                            <TextField
                                label={t('email')}
                                type="email"
                                size='small'
                                sx={{ m: 1, width: '24.5ch' }}
                                variant='standard'
                                name='email'
                                value={state.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, width: '24.5ch' }}>
                                <FormLabel id="buy-radio-buttons-group">{t('askCreditsBefore')}</FormLabel>
                                <RadioGroup
                                    aria-labelledby="buy-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    name="purchased"
                                >
                                    <FormControlLabel value="male" control={<Radio />} label={t('yes')} />
                                    <FormControlLabel value="female" control={<Radio />} label={t('no')} />
                                </RadioGroup>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '24.5ch' }}>
                                <FormLabel id="idea-radio-buttons-group">{t('askIdeaFootprint')}</FormLabel>
                                <RadioGroup
                                    aria-labelledby="idea-radio-buttons-group"
                                    name="purchased"
                                >
                                    <FormControlLabel value="male" control={<Radio />} label={t('yes')} />
                                    <FormControlLabel value="female" control={<Radio />} label={t('no')} />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <TextField 
                                type="text"
                                size='small'
                                sx={{ m: 1, width: '20ch' }}
                                variant="standard"
                                name='manytonnes'
                                value={state.manytonnes}
                                onChange={handleInputChange}
                            />
                            <FormLabel sx={{ color: 'black'}}>{t('howmanytonnes')}</FormLabel>
                        </div>
                        <div>
                            <TextField 
                                label={t('message')}
                                multiline
                                name='message'
                                size="small"
                                sx={{ m: 1}}
                                rows={3}
                                fullWidth
                                value={state.message}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                        <Button 
                            type="submit"
                            sx={{ m: 1}}
                            variant='outlined'
                            fullWidth
                            children={t('submit')}
                        />
                        </div>
                    </Box>

                </form>
            </section>
        </main>



    );
}

export default Contact;