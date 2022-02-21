import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function BuyCredits() {
    const { t, i18n } = useTranslation();
    const [state, setState] = useState({
        email: "",
        firstname: "",
        name: ""
    });

    function validateForm(event) {

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
            <section className="sectionNoLimit home02 displayCollumCenter textCenter BuyCredits ">
                <h2 className="marginB01">Go carbon Neutral</h2>
                <p className="">Vous pouvez contribuer à résoudre le problème du changement climatique</p>
                <p className="col6P marginT020">Travaillez à réduire vos émissions et collaborez avec la banque du carbone pour compenser votre empreinte ou allez plus loin et supprimez le dioxyde de carbone que vous avez déjà émis en soutenant des projets de transition écologique. Nos projets de compensation sont validés par des tiers et vérifiés selon les normes les plus strictes.</p>
                <div className="col7 NowWrapCenterW marginT020">
                    <Link to="/MenuCarbonIndividual"><p className="button05 marginR005">{t('ForIndividuals')}</p></Link>
                    <Link to="/MenuCarbonBusiness"><p className="button05">{t('ForBusinesses')}</p></Link>
                </div>
            </section>
        </main>
    );
}

export default BuyCredits;