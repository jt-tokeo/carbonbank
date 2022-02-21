//import './App.css';
import { useTranslation } from 'react-i18next';

/*picto*/
import picto_transparency_01 from '../media/picto/picto_transparency_01.svg';
import picto_traceability_01 from '../media/picto/picto_traceability_01.svg';
import picto_efficiency_speed_01 from '../media/picto/picto_efficiency_speed_01.svg';
import picto_reducedcost_01 from '../media/picto/picto_reducedcost_01.svg';
import picto_3d_01 from '../media/picto/ico_neutral_96.png';

/*logotype*/
import logo_bpi_france from '../media/logotype/logo_bpi_france_nb.png';
import logo_execelia from '../media/logotype/logo_blockis_nb.png';
import logo_lab_tourisme from '../media/logotype/logo_lab_tourisme_nouvelle_aquitaine_nb.png';
import logo_helioparc from '../media/logotype/logo_eu.png';
import logo_french_tech from '../media/logotype/logo_french_tech_nb.png';
import logo_financement_croissance from '../media/logotype/logo_financement_croissance_verte_nb.png';
import logo_label_bas_carbone from '../media/logotype/logo_label_bas_carbone_nb.png';

/* home illustration*/
import picto_Invest_01 from '../media/illustration/illustration_invest_01.svg';
import picto_support_01 from '../media/illustration/illustration_support_01.svg';
import picto_manage_01 from '../media/illustration/illustration_manage_01.svg';
import picto_bLockChain_01 from '../media/illustration/illustration_bLockChain_01.svg';
import illustration_concerned_01 from '../media/img/heart_pose_01.png';
import img_Offset_Individual_graph_01 from '../media/img/graph_offset_individual.png';


/*3D img*/
import img_girl_pose_01 from '../media/img/girl_pose_01.png';
import img_girl_pose_02 from '../media/img/girl_pose_02.png';
import img_girl_pose_03 from '../media/img/girl_pose_03_b.png';
import img_girl_pose_04 from '../media/img/girl_pose_04.png';
import { useEffect } from 'react';



function Home() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      localStorage.clear();
    }, []);
    

    return (
        <main>
            <section className="home">
                <article className="col4">
                    <h1 className="h7">The Carbon Bank</h1>
                    <p className="h1P col8">{t('h1p')}</p>
                </article>
                <img className="col4P" src={illustration_concerned_01} alt=""></img>
            </section>

            <section>
                <article className="col4P displayFlexSpace">
                    <h3>{t('homeMissionH3')}</h3>
                    <p className="pAcrrocheBig">{t('homeMissionP')}</p>
                    <p className="marginT020">{t('homeMissionTxt1')}<br /><br />{t('homeMissionTxt2')}</p>
                </article>
                <img className="col5" src={img_girl_pose_04} alt="" />
            </section>

            <section className="displayCollumCenterV sectionColor01">
                
                <article className="col1 displayFlexSpace02 marginB020">
                    <img className="col5P" src={img_girl_pose_03} alt=""></img>
                    <div className="col4P">
                        <h3>{t('homeBCAvantage')}</h3>
                        <p className="pAcrrocheBig col1">{t('homeBCAvantage1')}</p>
                    </div>

                </article>
                {/*
                <article className="col90P NoWrapSpace marginT020">
                    <article className="ChainCard col25Card  displayCollumCenterVTop">
                        <img className="pictoCenter40 marginB01" src={picto_reducedcost_01} alt="" />
                        <div className="marginT005">
                            <h5>Reduced Cost</h5>
                            <p className="">Automation of the approval process through multiparty consensus will speed up calculation and streamline the whole carbon trading process.</p>
                        </div>
                    </article>
                    <article className="ChainCard col25Card displayCollumCenterVTop">
                        <img className="pictoCenter40 marginB01" src={picto_traceability_01} alt="" />
                        <div className="marginT005">
                            <h5>Traceability</h5>
                            <p className="">A blockchain ledger unites claimants with verification agents so traders will know immediately the source and value of those units.<br /> As all data is shared, it is visible in real time to all stakeholders.</p>
                        </div>
                    </article>

                    <article className="ChainCard col25Card displayCollumCenterVTop ">
                        <img className="pictoCenter40 marginB01" src={picto_transparency_01} alt="" />
                        <div className="marginT005">
                            <h5 className="">Transparency</h5>
                            <p className="" >Because consensus amongst the parties – emitters, off-setters,<br /> verifiers and traders – is required for every transaction, once recorded on a blockchain, the amounts of carbon units cannot be falsified.</p>
                        </div>
                    </article>


                    <article className="ChainCard col25Card displayCollumCenterVTop">
                        <img className="pictoCenter40 marginB01" src={picto_efficiency_speed_01} alt="" />
                        <div className="marginT005">
                            <h5>Efficiency &amp; Speed</h5>
                            <p className="">Agreement amongst the parties to use the blockchain for registration of carbon offsets or credits,<br /> will streamline measurement, reporting and verification (MRV) procedures.</p>
                        </div>
                    </article>
                
                </article>
                */}
            </section>

            <section className="ChainCard02 marginT020 marginB020 col7 NowWrapCenterW">
                <img src={picto_3d_01} alt="" />
                <h4 >{t('homeMissionTxt3')}</h4>
            </section>

            <div className="lignEnd"></div>

            <section className="displayFlex">
                <section className="col5P displayCenterTop textCenter">
                    <h4 className="col1">We work according to the principles of</h4>
                    <div className="boxLogo">
                        <img className="logo" src={logo_financement_croissance} alt="" />
                        <img className="logo" src={logo_label_bas_carbone} alt="" />
                    </div>
                </section>

                <section className="col5P displayCenterTop textCenter">
                    <h4 className="col1">We collaborate on projects with</h4>
                    <div className="boxLogo">
                        <img src={logo_bpi_france} alt="" />
                        {/* <img src={logo_execelia} alt="" /> */}
                        <img src={logo_lab_tourisme} alt="" />
                        <img src={logo_helioparc} alt="" />
                        <img src={logo_french_tech} alt="" />
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Home;