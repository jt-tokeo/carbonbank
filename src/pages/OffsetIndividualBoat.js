import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import transport_calculator, { CarbonCalculator } from './calculator/transport_calculator';
import { useNavigate } from 'react-router';

/*img**/
function OssetIndividualBoat() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();

    const [state, setState] = useState({
        transport: 'boat',
        distance: '',
        NbUser: '',
        NbMulty:'1'
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
        

        if(state.distance !== '' && state.NbUser !== '') {
            localStorage.setItem("Boat", JSON.stringify({
                distance: state.distance,
                NbUser: state.NbUser,
                NbMulty: typeTraget(state.NbMulty),
                carbon: CarbonCalculator(transport_calculator(state.transport),Number(state.distance), Number(state.NbMulty), Number(state.NbUser))
            }));
            navigate('/basket');
        }
    }


    console.log(state);
    return (
        <main>
            <section className="home boxOffsetBoat">
                <article className="col5">
                    <h2 className="col1">Compensez vos émissions de croisière !</h2>
                    <p className="h1P col7">Mesurez votre empreinte carbone. Réduisez. Contribuez à des projets de compensation carbone. Nous sommes votre partenaire de confiance dans votre trajectoire vers la contribution carbone. </p>
                </article>
                <img className="col4P" src="" alt=""></img>
            </section>

            <div className="lignEndPicto marginT005"></div>

            <section className="sectionForm displayFlexSpace">
                <article className="col4P">
                    <h3 className="">Calculez les émissions de CO2 de votre croisière</h3>
                    <p className="pbig">À l’aide du calculateur de croisières, calculez l’empreinte CO2 de votre croisière ainsi que le montant qui est nécessaire pour la compensation de CO2.</p>
                </article>

                <form className="col3P displayFlexSpace" onSubmit={HandleSubmit}>
                    <h3 className="col1 textCenter">Calculer</h3>

                    <div className="col1 marginB005">
                        <input type='number' name="distance" id="boatDistance" value={state.distance} onChange={HandleChange} required></input>
                        <label>distance / km</label>
                    </div>

                    <div className="col1 input0 marginB005 NoWrapSpaceCenter">
                        <input type="number" name="NbUser" value={state.NbUser} onChange={HandleChange} className="col3 input01" id="BoatNumberUser"></input>
                        <p className="col5">Nombre de passager</p>
                    </div>

                    <select name='NbMulty' value={state.NbMulty} onChange={HandleChange} className="col6P button02" id="boatNumberMult">
                        <option value="1">aller retour</option>
                        <option value="2">aller simple</option>
                    </select>

                   <button type="submit"  className="button01 marginT01">Place order</button>
                </form>
            </section>
        </main>
    );
}

export default OssetIndividualBoat;