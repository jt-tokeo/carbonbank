//import './App.css';
import { useTranslation } from 'react-i18next';

/*picto*/
import picto_3d_01 from '../media/picto/icon_3d_01.png';

/* home illustration*/
import picto_api_01 from '../media/illustration/boy_pose_04.png';

/*img*/
import picto_api_02 from '../media/img/api_code_01.png';
import picto_tab_bord from '../media/img/tableau-de-bord.png';
import ico_api from '../media/img/ico-api.png';
import ico_neutral from '../media/picto/ico_neutral_96.png';

function API() {
    const { t, i18n } = useTranslation();
    return (
        <main>
            <section className="home">
                <article className="col5">
                    <h2 className="col1">{t('apiIntro')}</h2>
                    <p className="h1P col9">{t('apiIntro1')}</p>
                    
                    <div className="displayFlexSpace">
                        <p className="col3 displayCollumCenter button04 marginT005">Get Api</p>
                        <div className="col45 marginT005">
                            <p className="">{t('apiIntro2')}</p>
                        </div>
                    </div>
                </article>
                <img className="col4P" src={picto_api_01} alt=""></img>
            </section>


            <div className="lignEndPicto"></div>

            <section>
                <article className="col1P">
                    <h3 className="textCenter">{t('apiContribCarbon')}</h3>
                </article>
                <article className="col1P displayFlex">
                        <article className="ChainCard col5Card  displayCollumCenterVTop">
                            <div className="">
                                <h5 className="textCenter ">{t('apiContribCarbon1')}</h5>
                            </div>
                        </article>
                        <article className="ChainCard col5Card  displayCollumCenterVTop">
                            <div className="">
                                <h5 className="textCenter">{t('apiContribCarbon2')}</h5>
                            </div>
                        </article>
                        <article className="ChainCard col5Card  displayCollumCenterVTop">
                            <div className="">
                                <h5 className="textCenter">{t('apiContribCarbon3')}</h5>
                            </div>
                        </article>
                        <article className="ChainCard col5Card  displayCollumCenterVTop">
                            <div className="">
                                <h5 className="textCenter">{t('apiContribCarbon4')}</h5>
                            </div>
                    </article>

                </article>
            </section>

            <div className="lignEnd"></div>

            <section className="displayFlex">
                <article className="col5P displayCenterTop">
                    <h3 className="col1 marginB01">{t('apiUtil')}</h3>
                    <div className="ChainCard03  marginB005 NowWrapCenterW">
                        <img className="" src={ico_api} alt="" />
                        <p className="">{t('apiUtil1')}</p>
                    </div>
                    <div className="ChainCard03  marginB005  NowWrapCenterW">
                        <img className="" src={picto_tab_bord} alt="" />
                        <p className="">{t('apiUtil2')}</p>
                    </div>
                </article>
                
                <div className="col5P">
                    <img className="imgHom" src={picto_api_02} alt=""></img>
                </div>
            </section>
            <section>
                    
                    <div className="ChainCard02 col1 marginB01 NowWrapCenterW">
                        <img src={ico_neutral} alt=""  />
                        <h4> {t('apiClient')}</h4>
                    </div>
            </section>
        </main>
    );
}

export default API;