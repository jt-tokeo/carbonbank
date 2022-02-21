import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import transport_calculator, { CarbonCalculator } from './calculator/transport_calculator';
import { useNavigate } from 'react-router';
import { Box, Button, MenuItem, TextField } from '@mui/material';


function OffsetIndividualCar() {
    const { t } = useTranslation();
    let navigate = useNavigate();

    const [state, setState] = useState({
        transport: 'car-ther',
        distance: '',
        NbUser: '1',
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
            localStorage.setItem("Car", JSON.stringify({
                distance: state.distance,
                NbUser: state.NbUser,
                NbMulty: typeTraget(state.NbMulty),
                carbon: CarbonCalculator(transport_calculator(state.transport), Number(state.distance), Number(state.NbMulty), Number(state.NbUser))
            }));
            navigate('/basket');
        }
    }

    return (
        <main>
            <section className="home boxOffsetCar" onSubmit={HandleSubmit}>
                <article className="col5">
                    <h2 className="col1">Calculate the carbon footprint of your car journeys</h2>
                    <h4 className="h1P">The car is the symbol of our individual mobility.
                     At the same time, a significant amount of emissions with a harmful effect on the climate is given off by individual,
                      motorised mobility.
                      Our individual ecological footprint is determined by this to a considerable extent. 
                      For this reason, it is important to travel by car as little as possible, to drive energy-efficient vehicles and to offset the unavoidable CO2 emissions in a climate protection project.
                    </h4>
                </article>

                <article className="col3P displayFlexSpace formOffset">
                    <h3 className="col1 textCenter">CO2 emissions calculator for your car</h3>
                <Box
                    component="form"
                    sx={{ ml : 1}}
                    noValidate
                    autoComplete='off'
                >
                    <div>
                        <TextField 
                            label="distance traveled / km"
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
                            select
                            size='small'
                            sx={{ m: 1, width: '20ch' }}
                            // variant="standard"
                            name='transport'
                            value={state.transport}
                            onChange={HandleChange}
                            required
                        >
                            <MenuItem value="car-ther">Thermic</MenuItem>
                            <MenuItem value="car-elec">Electric</MenuItem>
                            <MenuItem value="car-hyb">Hybrid</MenuItem>
                        </TextField>
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
                            <MenuItem value="1">Round trip</MenuItem>
                            <MenuItem value="2">Single trip</MenuItem>
                        </TextField>
                    </div>
                    <div>
                        <Button 
                            type="submit"
                            sx={{ m: 1 }}
                            variant='outlined'
                            fullWidth
                            children="Place order"
                        />
                    </div>
                </Box>


                </article>

            </section>
        </main>
    );
}

export default OffsetIndividualCar;