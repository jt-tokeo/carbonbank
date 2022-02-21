import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import transport_calculator, { CarbonCalculator } from './calculator/transport_calculator';
import { useNavigate } from 'react-router';

function OffsetIndividualBus() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();

    const [state, setState] = useState({
        transport: 'bus-ther',
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
            localStorage.setItem("Bus", JSON.stringify({
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
            <section className="home boxOffsetCar">
                <article className="col5">
                    <h2 className="col1">Compensez les émissions de votre trajet !</h2>
                    <h4 className="h1P col7">Mesurez votre empreinte carbone. Réduisez. Contribuez à des projets de compensation carbone. Nous sommes votre partenaire de confiance dans votre trajectoire vers la contribution carbone. </h4>
                </article>

                <form className="col3P displayFlexSpace formOffset" onSubmit={HandleSubmit}>
                    <h3 className="col1 textCenter">Calculez</h3>

                    <div className="col1 marginB005">
                        <input name="distance" type="number" value={state.distance} onChange={HandleChange} required></input>
                        <label>distance / km</label>
                    </div>

                    <div className="col1 input0 marginB005 NoWrapSpaceCenter">
                        <input name="NbUser" type="number" value={state.NbUser} onChange={HandleChange} className="col3 input01" id="busNumberUser"></input>
                        <p className="col5">Nombre de passager</p>
                    </div>

                    <select name="transport" type="number" value={state.transport} onChange={HandleChange} className="col45 button02" id="carEngineType">
                        <option value="bus-elec">Electric</option>
                        <option value="bus-gazole">Thermique</option>
                        <option value="bus-gaz">Gaz Naturel</option>
                    </select>

                    <select name="NbMulty" value={state.NbMulty} onChange={HandleChange} className="col6P button02" id="busNumberMult">
                         <option value="1">aller simple</option>
                        <option value="2">aller retour</option>
                    </select>

                    <button type="submit" className="button01 marginT01">Place order</button>
                </form>

            </section>
        </main>
    );
}

export default OffsetIndividualBus;