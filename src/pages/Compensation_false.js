import '../css/Forms.css';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function CompensationFalse() {
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
            <section className="sectionDonate">
                <h3>{t('donationform')}</h3>
                <form className='formInputButton formDonate' onSubmit={validateForm}>
                    <div className="donateBoxInfo">

                        <section className='donateName input_wrap input_wrapWhite'>
                            <div>
                                <input name="firstname" value={state.firstname} onChange={handleInputChange} required></input>
                                <label>{t('firstName')}</label>
                            </div>

                            <div>
                                <input name="name" value={state.name} onChange={handleInputChange} required></input>
                                <label>{t('name')}</label>
                            </div>

                            <div>
                                <input name="email" value={state.email} onChange={handleInputChange} required></input>
                                <label>{t('email')}</label>
                            </div>
                        </section>

                        <section className="donateAmount input_wrap input_wrapWhite">
                            <h4>{t('selectAmount')}</h4>
                            <label className="selectAmount">
                                <span>10€</span>
                                <span>25€</span>
                                <span>50€</span>
                                <span>100€</span>
                            </label>
                            <div>
                                <input type="number" name="amount" value={state.amount} onChange={handleInputChange} required></input>
                                <label>{t('amount')}</label>
                            </div>
                        </section>

                    </div>

                    <section className="donateCard input_wrap input_wrapYellow">
                        <h4>{t('infoCard')}</h4>

                        <section className="donateCardTop">
                            <div>
                                <input name="cardHolderName" value={state.cardHolderName} onChange={handleInputChange} required></input>
                                <label>{t('cardHolderName')}</label>
                            </div>

                            <div>
                                <input type="number" name="cardNumber" value={state.cardNumber} onChange={handleInputChange} required></input>
                                <label>{t('cardNumber')}</label>
                            </div>
                        </section>

                        <div>
                            <input type="month" name="expiryDate" value={state.expiryDate} onChange={handleInputChange} required></input>
                            <label>{t('expiryDate')}</label>
                        </div>

                        <div>
                            <input name="ccvCode" maxlength="3" value={state.ccvCode} onChange={handleInputChange} required></input>
                            <label>{t('ccvCode')}</label>
                        </div>

                    </section>

                    <label className="donateCardSend">
                        <input className="inputButtonHover " type="submit" value={t('sendDonation')}></input>
                    </label>

                </form>
            </section>
        </main>
    );
}

export default CompensationFalse;