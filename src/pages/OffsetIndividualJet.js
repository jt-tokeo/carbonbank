import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import transport_calculator, { CarbonCalculator } from './calculator/transport_calculator';
import { useNavigate } from 'react-router';
import { Box, Button, MenuItem, TextField } from '@mui/material';


function BuyCredits() {
    const { t, i18n } = useTranslation();

    let navigate = useNavigate();

    const [state, setState] = useState({
        transport: 'plane',
        distance: '',
        NbUser: '',
        NbMulty: '1'
    })

    function HandleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    function typeTraget(traget) {
        if (traget === 1) {
            return 'Go Back'
        } else {
            return 'Go Simple'
        }
    }

    function HandleSubmit(event) {
        event.preventDefault();


        if (state.distance !== '' && state.NbUser !== '') {
            localStorage.setItem("Plane", JSON.stringify({
                distance: state.distance,
                NbUser: state.NbUser,
                NbMulty: typeTraget(state.NbMulty),
                carbon: CarbonCalculator(transport_calculator(state.transport), Number(state.distance), Number(state.NbMulty), Number(state.NbUser))
            }));
            navigate('/basket');
        }
    }
    console.log(state);

    return (
        <main>
            <section className="home">
                <article className="col5">
                    <h2 className="col1">Compensez les émissions de votre vol!</h2>
                    <p className="h1P col7">Mesurez votre empreinte carbone. Réduisez. Contribuez à des projets de compensation carbone. Nous sommes votre partenaire de confiance dans votre trajectoire vers la contribution carbone. </p>
                </article>

                <article className="col3P displayFlexSpace" onSubmit={HandleSubmit}>
                    <h3 className="col1 textCenter">Calculer</h3>
                    <Box
                        component="form"
                        sx={{}}
                        noValidate
                        autoComplete='off'
                    >
                        <div>
                            <TextField 
                                label="distance / km"
                                type="text"
                                size='small'
                                sx={{ m: 1}}
                                fullWidth
                                // variant="standard"
                                name='distance'
                                value={state.distance}
                                onChange={HandleChange}
                                required
                            />
                        </div>
                        <div>
                            <TextField 
                                label="Nombre de passager"
                                type="text"
                                size='small'
                                sx={{ m: 1}}
                                fullWidth
                                // variant="standard"
                                name='NbUser'
                                value={state.NbUser}
                                onChange={HandleChange}
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                select
                                size='small'
                                sx={{ m: 1, width: '20ch' }}
                                // variant="standard"
                                name='NbMulty'
                                value={state.NbMulty}
                                onChange={HandleChange}
                                required
                            >
                                <MenuItem value="1">aller retour</MenuItem>
                                <MenuItem value="2">aller simple</MenuItem>
                            </TextField>
                            <Button 
                                type="submit"
                                sx={{ m: 1 }}
                                variant='outlined'
                                // fullWidth
                                children="Place order"
                            />
                        </div>
                    </Box>
                    
                </article>

            </section>

        </main>
    );
}

export default BuyCredits;