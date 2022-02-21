import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


/*img**/
import img_Offset_Individual_Home_01 from '../media/img/leaf_04_v3.png';
import img_Offset_Individual_graph_01 from '../media/img/graph_offset_individual.png';
import transport_calculator from './calculator/transport_calculator';


function MenuCarbonIndividual() {
    const { t, i18n } = useTranslation();
    const bus = 0.000103;
    const boat = 0.000803;
    const train = 0.000042; 

    console.log(transport_calculator('boat'));

    return (
        <main>
            <section className="home">
                <article className="col5">
                    <h2 className="col1">Calculate and offset your Emissions!</h2>
                    <p className="h1P">It is surprising how many climate-​harming CO2 emissions arise when flying, driving, living, working and partying.</p>
                    <p className="h1P">We are transparent: find out more about our calculation principles and use of funds. We tell you how donations and payments are handled.</p>
                </article>
                <div className="col4P displayCenterTop">
                    <h3 className="col85 textCenter">Caculate your carbon footprint</h3>
                    <article className="col7 displayFlexSpaceCenter textCenter">
                        <Link className="boxPicto marginB01" to="/OffsetIndividualJet">
                                <div className="pictoJet marginB01"></div>
                                <h4>Flight</h4>
                        </Link>
                        <Link className="boxPicto marginB01" to="/OffsetIndividualCar">
                                <div className="pictoCar marginB01"></div>
                                <h4>Car</h4>
                        </Link>
                        <Link className="boxPicto marginB01" to="/OffsetIndividualBoat">
                                <div className="pictoBoat marginB01"></div>
                                <h4>Cruise</h4>
                        </Link>
                    </article>
                </div>
            </section>

        </main>
    );
}

export default MenuCarbonIndividual;