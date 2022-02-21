import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import transport_calculator, { CarbonCalculator } from './calculator/transport_calculator';
import { useNavigate } from 'react-router';

function OffsetIndividualBus() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();

    const [state, setState] = useState({
        transport: 'train',
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
            localStorage.setItem("Train", JSON.stringify({
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
                        <input name="distance" type="number" id="trainDistance" value={state.distance} onChange={HandleChange} required></input>
                        <label>distance / km</label>
                    </div>

                    <div className="col1 input0 marginB005 NoWrapSpaceCenter">
                        <input name="NbUser" type="number" className="col3 input01" id="trainNumberUser" value={state.NbUser} onChange={HandleChange}></input>
                        <p className="col5">Nombre de passager</p>
                    </div>

                    <select name="NbMulty" value={state.NbMulty} className="col6P button02" id="trainNumberMult">
                        <option value="1">aller retour</option>
                        <option value="2">aller simple</option>
                    </select>

                    <button type="submit" className="button01 marginT01">Place order</button>
                </form>

            </section>
        </main>
    );
}

export default OffsetIndividualBus;