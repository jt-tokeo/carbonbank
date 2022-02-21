import '../../css/Menu.css';
import '../../css/wallet.css';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Wallet() {
    return (
        <>
        <section className="wallet sectionCenter">
            <p>Borrower wallet works!</p>
            <button type="button">sale</button>
            <button type="button">buy</button>
            <button type="button">stacker</button>

        </section>
        <section>

        </section>
        </>
    );
}

export default Wallet;