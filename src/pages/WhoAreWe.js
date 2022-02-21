import '../css/whoarewe.css';

/** illustration **/
import illustration_concerned_01 from '../media/img/heart_pose_01.png';
import illustration_sales_01 from '../media/illustration/illustration_sales_01.svg';
import illustration_payment_01 from '../media/illustration/illustration_payment_01.svg';


function WhoAreWe() {
    return (
        <main>
            <section className="home">
                <article className="col5">
                    <h2 className="col1">Are you concerned about the climate crisis?</h2>
                    <p className="h1P col7">With the Carbon Bank,  we can all work together to reduce carbon emissions and end the climate crisis.</p>
                </article>
                <img className="col4P" src={illustration_concerned_01} alt=""></img>
            </section>

            <div className="lignEndPicto"></div>


            <section className="displayCenterTop">
                <h3 className="col7P textCenter marginB020">Are you a project developer interested in commercializing your carbon credits, or a potential buyer looking for a unique project?</h3>
                <ul className="col5 displayFlexSpace marginB020 marginT020">
                    <li className="col3P displayCollum textCenter">
                        <img className="marginB01" src={illustration_sales_01} alt=""></img>
                        <p>Carbon offset future contract or ex-ante sales</p>
                    </li>
                    <li className="col3P displayCollum textCenter">
                        <img className="marginB01" src={illustration_payment_01} alt=""></img>
                        <p>Carbon-based Debt Financing</p>
                    </li>
                </ul>
                <p className="col7P marginT020 textCenter">The Carbon Bank can source carbon credits produced by all the main voluntary and compliance standards. We are innovative, enjoy challenges, and we work with different market structures to secure the best solutions for our clients, including:</p>
            </section>

            <div className="lignEnd"></div>

            <section className="displayCenterTop">
                <h3 className="col1 textCenter">Services for Buyers</h3>
                <ul className="col5 displayFlexSpace marginB020 marginT020">
                    <li className="col3P displayCollum textCenter">
                        <img className="marginB01" src={illustration_sales_01} alt=""></img>
                        <p>A transparent and traceable process for carbon offset purchase</p>
                    </li>
                    <li className="col3P displayCollum textCenter">
                        <img className="marginB01" src={illustration_payment_01} alt=""></img>
                        <p>An easy tool to manage the challenging process of decarbonizing your operations</p>
                    </li>
                </ul>
                <p className="col7P marginT020 textCenter h1P">Carbon offsets are one of the most profitable commodity investments for the next years. </p>
            </section>

            <div className="col1 lignEndFlower2">
                <div></div>
                <div ></div>
                <div></div>
            </div>

            <section className="displayCollumCenter">
                <h3 className="marginB020 textCenter">Contact us to discuss how you can benefit from the Carbon Bank Marketplace</h3>
                <div className="col2 button01">
                    <p>CONTACT</p>
                </div>
            </section>
        </main>
    );
}

export default WhoAreWe;