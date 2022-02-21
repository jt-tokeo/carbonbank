import '../css/Forms.css';
import '../css/SignUp.css';
import { useContext, useState } from "react";
import config from "../config/config.json";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/**illustration**/
import picto_Invest_01 from '../media/img/invest_pose_03.png';
import DataContext from '../context/ContextConnection';
import { Box, Button, TextField } from '@mui/material';

function SignUp() {
    const { user } = useContext(DataContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmpassword: "",
        companyname: "",
        firstname: "",
        name: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        zipCode: ""
    });

    function validateForm(event) {
        event.preventDefault();
        if (state.password !== "" && state.password === state.confirmpassword) {
            let body = {
                email: state.email,
                password: state.password,
                companyName: state.companyname,
                firstName: state.firstname,
                name: state.name,
                phone: state.phone,
                address: state.address,
                city: state.city,
                country: state.country,
                zipCode: state.zipCode

            };
            let status;
            fetch(config.api_url + "/signup", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(body)
            })
                .then(res => { status = res.status; return res.json() })
                .then(jsonres => { if (status === 200) navigate('/connection') });
        }

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
            {(user.role === "visitor" || user.role === undefined) ?
                <>
                    <section className="home">
                        <article className="col5P">
                            <h2 className="col7">Invest now</h2>
                            <p className="h1P col9">Our investments let you tackle the climate emergency and help build more resilient communities by backing the innovative companies and councils who are trying to make a real difference.</p>
                        </article>
                        <img className="col3P" src={picto_Invest_01} alt=""></img>
                    </section>

                    <div className="lignEndPicto"></div>

                    <section className="displayCenterCenter">
                        <article className='col8P NoWrapSpace'>
                            <article className="col3P">
                                <div className="imgRadius imgInvesCompanies marginB01"></div>
                                <h3 className="marginB01">Invest in companies</h3>
                                <p>Put your money into businesses that are making a real, positive impact. Choose the level of risk you want to take and build an investment portfolio that delivers the impact you want to see.</p>
                                <ul className="plite marginT005 marginB005">
                                    <li>Fund companies directly</li>
                                    <li>Range of risks available</li>
                                    <li>Back innovative businesses</li>
                                </ul>
                                <a href="#"><p>investment available</p></a>
                            </article>

                            <article className="col3P">
                                <div className="imgRadius imgInvestCouncil marginB01"></div>
                                <h3 className="marginB01">Invest in councils</h3>
                                <p>Get a lower risk return by investing in our public stakeholders’ Investments. Now you can invest in councils who are delivering real green infrastructure projects.</p>
                                <ul className="plite marginT005 marginB005">
                                    <li>Fund council led projects</li>
                                    <li>Lower risk</li>
                                    <li>Build resilient communities</li>
                                </ul>
                                <a href="#" ><p>Find out more</p></a>
                            </article>

                            <article className="col3P">
                                <div className="imgRadius imgInvestMarket marginB01"></div>
                                <h3 className="marginB01">Buy on our marketplace</h3>
                                <p>Choose existing investments available to buy from other customers on our marketplace. Access a broad range of risks, sectors and returns from projects at different stages of maturity.</p>
                                <ul className="plite marginT005 marginB005">
                                    <li>Buy into established projects</li>
                                    <li>Range of risks available</li>
                                    <li>Build a diversified portfolio</li>
                                </ul>
                                <a href="#"><p>Find out more</p></a>
                            </article>
                        </article>
                    </section>

                    <div className="col1 lignEndFlower2">
                        <div></div>
                            <div ></div>
                        <div></div>
                    </div>

                    <section className="displayCollumCenter">
                        <h3 className="col1 textCenter">{t('getStart')}</h3>
                        <p className="col6 pAcrrocheBig textCenter">It’s simple to open a The Carbon Bank account and start mobilising your money for good.</p>

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
                                    sx={{m: 1}}
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
                                    label={t('firstName')}
                                    type="text"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    variant='standard'
                                    name='firstName'
                                    value={state.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextField 
                                    label={t('name')}
                                    type="text"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    variant='standard'
                                    name='name'
                                    value={state.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <TextField 
                                    label={t('email')}
                                    type="text"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    variant='standard'
                                    name='email'
                                    value={state.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextField 
                                    label={t('phone')}
                                    type="tel"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    variant='standard'
                                    name='phone'
                                    value={state.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <TextField 
                                    label={t('password')}
                                    type="password"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    fullWidth
                                    variant='standard'
                                    name='password'
                                    value={state.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextField 
                                    label={t('confirmPassword')}
                                    type="password"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    fullWidth
                                    variant='standard'
                                    name='confirmPassword'
                                    value={state.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <TextField 
                                    label={t('address')}
                                    type="text"
                                    size='small'
                                    sx={{m: 1, width: '47ch'}}
                                    fullWidth
                                    variant='standard'
                                    name='address'
                                    value={state.address}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextField 
                                    label={t('zipCode')}
                                    type="text"
                                    size='small'
                                    sx={{m: 1, width: '30ch'}}
                                    fullWidth
                                    variant='standard'
                                    name='zipCode'
                                    value={state.zipCode}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <TextField 
                                    label={t('city')}
                                    type="text"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    fullWidth
                                    variant='standard'
                                    name='city'
                                    value={state.city}
                                    onChange={handleInputChange}
                                    required
                                />
                                <TextField 
                                    label={t('country')}
                                    type="text"
                                    size='small'
                                    sx={{m: 1, width: '38.5ch'}}
                                    fullWidth
                                    variant='standard'
                                    name='country'
                                    value={state.country}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <Button 
                                    type="submit"
                                    // size='small'
                                    sx={{ m: 1}}
                                    variant='outlined'
                                    fullWidth
                                    placeholder={t('submit')}
                                    children={t('submit')}
                                    required
                                />
                            </div>
                        </Box>
                    </section>

                </>
                : <></>
            }
        </main>
    );
}

export default SignUp;