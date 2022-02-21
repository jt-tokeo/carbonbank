import './css/Home.css';
import './css/footer.css';

import React, { useContext, Suspense } from "react";
import {
    Routes,
    Route,
    Outlet,
} from "react-router-dom";

import AppFooter from './templates/AppFooter';

import Home from './pages/Home';
import Connection from './pages/Connection';
import NotFound from './pages/NotFound';
import BuyCredits from './pages/BuyCredits';
import BuyCreditsIndividual from './pages/BuyCreditIndividuals';
import Compensation from './pages/Compensation';
import Deposit from './pages/Deposit';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import WhoAreWe from './pages/WhoAreWe';
import ProjectDeposit from './pages/Borrowers/ProjectDeposit';
import AdminUsers from './pages/admin/AdminUsers';
import AdminProjects from './pages/admin/AdminProjects';
import Contact from './pages/Contact';
import Basket from './pages/Basket';
import Buy from './pages/Buy';
import BuyJet from './pages/BuyJet';

import API from './pages/API';
import MenuCarbonIndividual from './pages/MenuCarbonIndividual';
import MenuCarbonBusiness from './pages/MenuCarbonBusiness';
import OffsetIndividualJet from './pages/OffsetIndividualJet';
import OffsetIndividualCar from './pages/OffsetIndividualCar';
import OffsetIndividualBoat from './pages/OffsetIndividualBoat';
import OffsetIndividualBus from './pages/OffsetIndividualBus';
import OffsetIndividualTrain from './pages/OffsetIndividualTrain';
import BasketJet from './pages/BasketJet';

import FallBack from './FallBack';
import BorrowerWallet from './pages/Borrowers/Wallet';
import InvestorWallet from './pages/Investors/Wallet';

import OffsetIndividual from './pages/OffsetIndividual.js';



/** * import page ** investor **/
import Staking from './pages/Investors/Staking';
import DataContext from './context/ContextConnection';
import Dashboard from './pages/Investors/Dashboard';
// import Transactions from './pages/Investors/Transactions';
import Offsets from './pages/Investors/Offsets';
import Developer from './pages/Investors/Developer';
import Account from './pages/Investors/Account';

// navigation

// import HolderMenu from "../components/HolderMenu";
import InvestorMenu from "./components/Navigation/InvestorMenu";
import VisitorMenu from "./components/Navigation/VisitorMenu";
import AdminMenu from "./components/Navigation/AdminMenu";


function App() {
    const { user } = useContext(DataContext);

    function Wallet() {
        if (user.role === "investor" || localStorage.getItem('role') ) {
            return <InvestorWallet />;
        } else if (user.role === "holder" || localStorage.getItem('role') ) {
            return <BorrowerWallet />;
        } else {
            return <NotFound />;
        }
    }

    return (
        <>
            <Suspense fallback={<FallBack />}>
                <Routes>
                    <Route path="/" element={<LayoutFooter nav={<VisitorMenu/>}/>}>
                        <Route index element={<Home />} />
                        <Route path="whoarewe" element={<WhoAreWe />} />
                        <Route path="basketjet" element={<BasketJet />} />
                        <Route path="buyjet" element={<BuyJet />} />
                        <Route path="offsetindividualjet" element={<OffsetIndividualJet />} />
                        <Route path="offsetindividualcar" element={<OffsetIndividualCar />} />
                        <Route path="offsetindividualboat" element={<OffsetIndividualBoat />} />
                        <Route path="buycredits" element={<BuyCredits />} />
                        <Route path="buycreditsindividual" element={<BuyCreditsIndividual />} />
                        <Route path="compensation" element={<Compensation />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="menucarbonbusiness" element={<MenuCarbonBusiness />} />
                        <Route path="menucarbonindividual" element={<MenuCarbonIndividual />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="deposit" element={<Deposit />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="projectdeposit" element={<ProjectDeposit />} />
                        <Route path="connection" element={<Connection />} />
                        <Route path="offsetindividual" element={<OffsetIndividual />} />
                        <Route path="api" element={<API />} />
                        <Route path="offsetindividualboat" element={<OffsetIndividualBoat />} />
                        <Route path="offsetindividualbus" element={<OffsetIndividualBus />} />
                        <Route path="offsetindividualtrain" element={<OffsetIndividualTrain />} />
                        <Route path="basket" element={<Basket />} />
                        <Route path="buy" element={<Buy />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path='/' element={<Layout nav={<InvestorMenu/>}/>}>
                        <Route  path="dashboard" element={<Dashboard />} />
                        <Route path="wallet" element={Wallet()} />
                        <Route path="staking" element={<Staking />} />
                        <Route path="account" element={<Account />} >
                            <Route path=":typeAccount" element={<Account />} />
                        </Route>
                        <Route path="developer" element={<Developer />} />
                        <Route path="offsets" element={<Offsets />} >
                            <Route path=":typeOffsets" element={<Account />} />
                        </Route>
                        {/* <Route path="transactions" element={<Transactions />} >
                            <Route path=":typeTransactions" element={<Transactions />} />
                        </Route> */}
                    </Route>
                    <Route path='/admin' element={<Layout nav={<AdminMenu/>}/>}>
                        <Route index path="users" element={<AdminUsers />} />
                        <Route path="projects" element={<AdminProjects />} />
                    </Route>
                </Routes>
            </Suspense>

        </>
    );
}

function LayoutFooter(props) {
    return (
        <>
            
            {props.nav}
            <Outlet /><AppFooter></AppFooter>
        </>
    );
}

function Layout(props){
    return (
        <>
            {props.nav}
            <Outlet />
        </>
    )
}

export default App;
