import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function BuyJet() {
    const { t, i18n } = useTranslation();

    return (
        <main>
            <section className="home Basket col6 displayCenterTop textCenter marginCenter">
                <div className="col7M displayFlex">
                    <div className="col1 displayCollumCenterV basketTop">
                        <h4>Vos données de facturation</h4>
                        <div className="lignEnd50"></div>
                    </div>

                    <form className="marginB005 col1 displayFlexSpaceCenter input_wrap" required>

                        <div className="col45 marginB005">
                            <input name="firstName" required></input>
                            <label>{t('firstName')}</label>
                        </div>

                        <div className="col45 marginB005">
                            <input type="name" name="password" required></input>
                            <label >{t('name')}</label>
                        </div>

                        <div className="col45 marginB005">
                            <input name="companyname" required></input>
                            <label>{t('companyName')}</label>
                        </div>

                        <div className="col1 marginB005 marginT005">
                            <input name="address" required></input>
                            <label>{t('address')}</label>
                        </div>

                        <div className="col45 marginB005">
                            <input name="zipCode" required></input>
                            <label>{t('zipCode')}</label>
                        </div>

                        <div className="col45 marginB005">
                            <input name="city" required></input>
                            <label>{t('city')}</label>
                        </div>

                        <div className="col45 marginB005">
                            <input name="phone" required></input>
                            <label>{t('phone')}</label>
                        </div>

                        <div className="col45 marginB005">
                            <input name="country" required></input>
                            <label>{t('country')}</label>
                        </div>
                    </form>

                    <div className="col1 displayFlexTop InsertCart input_wrap">
                        <ul className="col7 NoWrap marginB020">
                            <li><p>Visa</p></li>
                            <li><p>American Express</p></li>
                            <li><p>Paypal</p></li>
                        </ul>
                        <div className="col1 marginL005 marginB005 marginR005">
                            <input type="text" name="phone button01" required></input>
                            <label className="plite">Numéro de carte</label>
                        </div>
                        <div className="col1 marginR005 marginL005 marginB005 NoWrapSpace ">
                            <div className="col45">
                                <input name="country" required></input>
                                <label className="plite">Date d'expiration</label>
                            </div>
                            <div className="col45 ">
                                <input name="country" required></input>
                                <label className="plite">code de sécurité</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col3M displayFlex">
                    <div className=" col1 displayCollumCenterV basketTop2">
                        <h4>Ma commande</h4>
                        <div className="lignEnd50"></div>
                    </div>
                    <div className="col1 YourProduct">
                    <ul>
                            <li><h4>Produit</h4><h4>Prix</h4></li>
                            <li><div className="lignEnd"></div></li>
                            <li>
                                <p className="plite02">.Paris (FR), CDG à Marseille (FR)
                                    <br />.Economy Class
                                    <br />.env. 700 km
                                    <br />.1 voyageur
                                </p>
                                <p>14 €</p>
                            </li>
                            <div className="lignEnd50"></div>
                            <li >
                                <p className="plite02"> .Paris (FR), CDG à Marseille (FR)
                                    <br />.Economy Class
                                    <br />.env. 700 km
                                    <br />.1 voyageur
                                </p>
                                <p>14 €</p>
                            </li>
                            <li className="marginT01"><div className="lignEnd"></div></li>
                            <li><p>Prix Total</p><p>28 €</p></li>
                        </ul>
                    </div>
                    <Link className="col1" to="/Home"><div className="button01 marginT01"><p>Payez</p></div></Link>
                </div>
            </section>
        </main>
    );
}

export default BuyJet;