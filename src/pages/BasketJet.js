import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Basket() {
    const { t, i18n } = useTranslation();

    return (
        <main>

            <section className="home displayCenterTop textCenter marginCenter">
                <div className="displayFlexSpaceCenter marginB020 col1 ">
                    <div className="buttonSuivieOff col3">Calculez</div>
                    <div className="buttonSuivie col3">Compensez</div>
                    <div className="buttonSuivieOff col3">Payez</div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Destination</th>
                            <th>Class</th>
                            <th>distance</th>
                            <th>nombre d'utilisateur</th>
                            <th>empreinte Carbone</th>
                            <th>Prix</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Paris à Marseille</td>
                            <td>Economy Class</td>
                            <td>env. 700 km</td>
                            <td>1</td>
                            <td>0.336 t CO2</td>
                            <td>14 €</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Marseille à Paris</td>
                            <td>Economy Class</td>
                            <td>env. 700 km</td>
                            <td>1</td>
                            <td>0.336 t CO2</td>
                            <td>14 €</td>
                            <td>-</td>
                        </tr>
                        <tr>
                        <td>Marseille à Paris</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="fontP">total / 0.674 t</td>
                            <td className="fontP">28 €</td>
                            <td className="fontP"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="col90 marginT020 displayFlexSpace">
                    <div className="col3 button06 NowWrapCenterW">
                        <p className="col7 plite">Compensez d'autres émissions</p>
                        <h4 className="col3">+</h4>
                    </div>
                    <div className="NoWrapR">
                        <div className="col15 marginR005 button05">envoyer comme cadeaux</div>
                        <Link to="/BuyJet"><div className="col3 button05">Passer à la caisse</div></Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Basket;