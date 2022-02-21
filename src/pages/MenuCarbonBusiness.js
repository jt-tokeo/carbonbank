import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


/*img**/
import img_Offset_Individual_Home_01 from '../media/img/leaf_04_v3.png';


function MenuCarbonBusiness() {
    const { t, i18n } = useTranslation();

    return (
        <main>
            <section className="home">
                <article className="col5">
                    <h2 className="col1">Le changement climatique vous concerne et compte pour votre entreprise.</h2>
                    <h4 className="col7">Vous menez des actions pour réduire vos émissions de Gaz à Effet de Serre et vous souhaitez aller plus loin. La CIENA vous propose de soutenir des projets locaux de développement durable, qui ont un sens pour vous, et qui vous permettent de compenser vos émissions de GES résiduelles.</h4>
                </article>
                <div className="col4 home displayCollumCenter">
                    <h3 className="textCenter">Caculez votre empreinte carbone</h3>
                    <article className="col1 displayFlexSpace02 textCenter">
                        <Link className="boxPicto displayCollumCenter" to="/OffsetIndividualJet">
                                <div className="pictoEntreprise marginB01"></div>

                            <h4 className="textCenter">Entreprise</h4>
                        </Link>
                        <Link className="boxPicto displayCollumCenter" to="/OffsetIndividual">
                                <div className="pictoEvent marginB01"></div>
                                <h4>Evenement</h4>

                        </Link>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default MenuCarbonBusiness;