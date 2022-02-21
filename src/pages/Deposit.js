import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Box, Button, TextField } from '@mui/material';



function Deposit() {
    const { t } = useTranslation();
    const [state, setState] = useState({
        name: "",
        firstName: "",
        email: "",
        phone: "",
        companyName: "",
        address: "",
        zipCode: "",
        country: "",
        city: "",
        projectName: "",
        estimatedFundVolume: "",
        description: "",
        expectedRevenue: ""
    });

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
                    <h2 className="col1">{t('financeSustainable')}</h2>
                    <p className="h1P col8">Benefit from the carbon bank unbureaucratic application process and get the funding you need to implement low carbon transition s projects.</p>
                </article>
                
            </section>

            <div className="lignEndPicto"></div>

            <section className="displayCenterTop">
                <h3 className="col5P textCenter marginB020">{t('benefits')}</h3>
                <div className="col7 displayFlexSpace">
                    <article className="col3P displayCollumCenterV marginB020">
                        <div className="circleS75 marginB020"></div>
                        <h4 className="marginB01 textCenter">{t('customised')}</h4>
                        <p>{t('loremParagraph')}</p>
                    </article>
                    <article className="col3P displayCollumCenterV ">
                        <div className="circleS75 marginB020"></div>
                        <h4 className="marginB01 textCenter">{t('publicity')}</h4>
                        <p>Crowdfunding exceeds the bounds of traditional financing. It’s an opportunity to effectively address new customers and appeal to future employees. Position yourself as a truly sustainable company and stand out from your competitors.</p>
                    </article>
                    <article className="col3P displayCollumCenterV">
                        <div className="circleS75 marginB020"></div>
                        <h4 className="marginB01 textCenter">{t('unbureaucratic')}</h4>
                        <p>Tedious application processes and endless forms? Thanks to The Carbon Bank lean approval process you will receive a confirmation within 2-3 weeks. Do not waste your precious time. Focus on achieving your business goals instead.</p>
                    </article>
                </div>
            </section>

            <div className="col1 lignEndFlower2">
                <div></div>
                <div ></div>
                <div></div>
            </div>

            <section className="displayCenterCenter">
                <h4  className="col1 textCenter marginB020">Checklist for your funding proposal</h4>
                <p className="pAcrroche marginB020">We only finance projects that meet the following conditions. Please base your project application on the criteria below.</p>
                    <ul className="displayFlexSpace col7 textCenter">
                        <li className="col5P plite marginB01">Minimum loan requirement of € 10,000</li>
                        <li className="col5P plite marginB01">Reduction of harmful emissions or minimising the exploitation of natural resources</li>
                        <li className="col5P plite marginB01">The project generates income, reduces costs or is a project development.</li>
                        <li className="col5P plite marginB01">The project has a payback period of between 1 and 10 years.</li>
                        <li className="col5P plite marginB01">The borrower is registered in an EU Country.</li>
                        <li className="col5P plite marginB01">The company has at least 3 permanent employees.</li>
                        <li className="col5P plite">The company must be active for at least 1 year with references to show for it.</li>
                        <li className="col5P plite">The company must be able to offer investors additional collateral.</li>
                    </ul>
            </section>

            <div className="lignEnd"></div>

            <section className="displayCollumCenterV input_wrap">
                <h4 className="col7 textCenter marginB020">{t('h4ProposeProject')}</h4>
                <p className="pAcrroche col5">{t('pConsultation')}</p>
                
                <Box
                    component="form"
                    sx={{}}
                    noValidate
                    autoComplete='off'
                >
                    <div>
                        <TextField 
                            label={t('name')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='name'
                            value={state.name}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField 
                            label={t('firstName')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='firstName'
                            value={state.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <TextField 
                            label={t('phone')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='phone'
                            value={state.phone}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField 
                            label={t('email')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='email'
                            value={state.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <TextField 
                            label={t('companyName')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='companyName'
                            value={state.companyName}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField 
                            label={t('address')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='address'
                            value={state.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <TextField 
                            label={t('zipCode')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '25ch' }}
                            variant='standard'
                            name='zipCode'
                            value={state.zipCode}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField 
                            label={t('city')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '25ch' }}
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
                            sx={{ m: 1, width: '25ch' }}
                            variant='standard'
                            name='country'
                            value={state.country}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                    <TextField 
                            label={t('projectName')}
                            type="text"
                            size='small'
                            sx={{ m: 1}}
                            variant='standard'
                            fullWidth
                            name='projectName'
                            value={state.projectName}
                            onChange={handleInputChange}
                            required
                    />
                    </div>
                    <div>
                        <TextField 
                            label={t('estimatevolume')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='estimatedFundVolume'
                            value={state.estimatedFundVolume}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField 
                            label={t('expectedRevenue')}
                            type="text"
                            size='small'
                            sx={{ m: 1, width: '38.5ch' }}
                            variant='standard'
                            name='expectedRevenue'
                            value={state.expectedRevenue}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                    <TextField 
                        label={t('descriptionProject')}
                        multiline
                        name='description'
                        size="small"
                        sx={{ m: 1}}
                        rows={3}
                        fullWidth
                        value={state.description}
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
            </section>
        </main>
    );
}

export default Deposit;