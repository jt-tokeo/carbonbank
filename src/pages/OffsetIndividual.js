import { useTranslation } from 'react-i18next';

/*img**/
import img_Offset_Individual_Home_01 from '../media/img/leaf_04_v3.png';

function BuyCredits() {
    const { t, i18n } = useTranslation();

    return (
        <main>
            <section className="home">
                <article className="col5">
                    <h2 className="col1">{t('OffsetLife')}</h2>
                    <p className="h1P col7">{t('OffsetLifeP')}</p>
                </article>
                <img className="col5P" src={img_Offset_Individual_Home_01} alt=""></img>
            </section>

            <div className="lignEndPicto"></div>

            <section className="displayFlexSpace home">
                <article className="col3P">
                    <h3 className="">{t('LifeStyle')}</h3>
                    <p className="pAcrrocheBig">{t('LifeStyleP')}</p>
                </article>

                <article className="displayFlex col6">

                    <div className="cardOffset">
                        <div className="cardOffsetText displayCollumCenterV">
                            <h4 className="marginT01">Contribution carbone annuelle individuel </h4>
                            <div className="lignEnd50 marginT005 marginB005"></div>
                            <p>​11 tonnes équivalent CO2 <br/>(t CO2 éq)</p>
                            <div className="col7 littleButton NoWrap displayCenterCenter marginT01">
                                <p>470 {t('Umoney')}</p>
                                <p className="plite">{t('purchase')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="cardOffset">
                        <div className="cardOffsetText displayCollumCenterV">
                            <h4 className="marginT01">{t('CoupleAnnual')}</h4>
                            <div className="lignEnd50 marginT005 marginB005"></div>
                            <p>​23 tonnes équivalent CO2<br/>(t CO2 éq)</p>
                            <div className="col7 littleButton NoWrap displayCenterCenter marginT01">
                                <p>920 {t('Umoney')}</p>
                                <p className="plite">{t('purchase')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="cardOffset ">
                        <div className="cardOffsetText displayCollumCenterV">
                            <h4 className="marginT01">Contribution carbone annuelle pour une famille </h4>
                            <div className="lignEnd50 marginT005 marginB005"></div>
                            <p>23 tonnes équivalent CO2 <br/>(t CO2 éq) </p>
                            <div className="col7 littleButton NoWrap displayFlexSpace marginT01">
                                <p className="plite">calculer votre empreinte carbone</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default BuyCredits;