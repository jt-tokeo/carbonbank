import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const MenuVertical = (props) => {

    let location = useLocation();


    function ColorNav (name){
        let path = location.pathname.split('/');
        console.log(path[1]);
        if (path[1] === name) {
            return "colorChoose";
        }else{
            return null
        }
    }

    return (
        <nav className="navHeader navInvestor">
            <ul className="menuLink menuLinkInvestor">
                <li className={ColorNav("dashboard")}><Link to="/dashboard" >{props.t('dashboard')}</Link></li>
                <li className={ColorNav("offsets")}><Link className="liOffse" to="/offsets">{props.t('buyOffsets')}</Link></li>
                <li className={ColorNav("wallet")}><Link className="liWallet" to="/wallet">{props.t('wallet')}</Link></li>
                <li className={ColorNav("staking")}><Link className="liStack" to="/staking">Staking</Link></li>
                {/* <li className={ColorNav("transactions")}><Link className="liTrans" to="/transactions">{props.t('Transactions')}</Link></li> */}
                <li className={ColorNav("developer")}><Link className="liDevel" to="/developer">{props.t('devTools')}</Link></li>
                <li className={ColorNav("account")}><Link className="liAccou" to="/account">{props.t('accountSett')}</Link></li>
            </ul>

        </nav>
    );
};

export default MenuVertical;