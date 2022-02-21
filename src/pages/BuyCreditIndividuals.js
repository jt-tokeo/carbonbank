import '../css/Forms.css';
import '../css/buyCredits.css';
import { useTranslation } from 'react-i18next';

function BuyCredits() {
    const { t, i18n } = useTranslation();

    return (
        <main>
            <section className="formInputButton sectionBuyCredit sectionCenter">
                <h5>Life Style</h5>
                <article>
                    <p>Individual Annual Offset</p>*
                    <p>52,920 lbs CO2 (24 MT)</p>
                </article>
            </section>
        </main>
    );
}

export default BuyCredits;