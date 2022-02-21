import React,{useContext, useState} from 'react';
import '../../css/Menu.css';
import '../../css/wallet.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import graphPrice from '../../media/img/graph_price_01-01.jpg';
import graphTransaction from '../../media/img/graph_transactions_01.jpg';
import DataContext from '../../context/ContextConnection';


function Wallet() {
    const {metadataContract, TCCBalance} = useContext(DataContext)

    const [navDiagramme1, setNavDiagramme1] = useState({
        num: 1,
        quantity:45.75,
        diagramme : 'graph00'
    });

    const [navDiagramme2, setNavDiagramme2] = useState({
        num: 1,
        quantity:214,
        diagramme : 'graph00'
    });
    return (
        <main className='mainInvestor mainInvestorWallet'>

            <section className="InvestorBox00">
                <article className="stat01 boxBalance00">
                    <h5>Balance</h5>
                    {/*<div className=''>
                        <p className="yellowHard">640</p>
                        <p className="yellowLite">TCB</p>
                    </div>*/}
                    <div>
                        {TCCBalance && metadataContract && <p className="yellowLite">{TCCBalance + metadataContract.symbol}</p>}
                        {!TCCBalance && metadataContract && <p className="yellowLite">{'0 ' + metadataContract.symbol}</p>}
                    </div>
                </article>

                <article className="stat01 boxExchange">
                    <h5>Exchange</h5>

                    <div className="boxInput00">
                        <select className="select01" name="" id="">
                            <option value="">TCC</option>
                        </select>

                        <input type="text" placeholder="amount" name="value" required />
                    </div>

                    <div className='pictoExchange'></div>

                    <div className="boxInput00">
                        <select className="select01" name="" id="">
                            <option value="">NEAR</option>
                        </select>

                        <input type="text" placeholder="amount" name="value" required />
                    </div>

                    <button className="select00">Send</button>
                </article>

                <article className="stat01 boxHsitory00">
                    <h5>History</h5>
                    <div className='boxlist00'>
                        <div className="listHistory00">
                            <div className='pictobuy00'></div>
                            <div className='boxBuy'>
                                <p>Buy TCC</p>
                                <p>28.87</p>
                            </div>
                            <div className="boxDate00">
                                <p>2022-02-18</p>
                                <p>10h38</p>
                            </div>
                        </div>

                        <div className="listHistory00">
                            <div className='pictobuy00'></div>
                            <div className='boxBuy'>
                                <p>Buy TCC</p>
                                <p>185</p>
                            </div>
                            <div className="boxDate00">
                                <p>2022-01-21</p>
                                <p>16h10</p>
                            </div>
                        </div>

                        <div className="listHistory00">
                            <div className='pictobuy00'></div>
                            <div className='boxBuy'>
                                <p>Buy TCC</p>
                                <p>15.3</p>
                            </div>
                            <div className="boxDate00">
                                <p>2021-11-25</p>
                                <p>15h38</p>
                            </div>
                        </div>

                        <div className="listHistory00">
                            <div className='pictobuy00'></div>
                            <div className='boxBuy'>
                                <p>Buy TCC</p>
                                <p>100.3</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-10-18</p>
                                <p>8h47</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section className="InvestorBox01">

                <article className="boxGraph01">

                    <ul className='filter00_3'>
                        <li className={navDiagramme1.num === 1 ? 'navDiag' : ''} onClick={() => setNavDiagramme1({
                            num: 1,
                            quantity:45.75,
                            diagramme : 'graph00'
                        })}>Day</li>
                        <li className={navDiagramme1.num === 2 ? 'navDiag' : ''} onClick={() => setNavDiagramme1({
                            num: 2,
                            quantity:52.21,
                            diagramme : 'graph00'
                        })}>Month</li>
                        <li className={navDiagramme1.num === 3 ? 'navDiag' : ''} onClick={() => setNavDiagramme1({
                            num: 3,
                            quantity:47.32,
                            diagramme : 'graph00'
                        })}>Year</li>
                    </ul>

                    <div className="boxTitle">
                        <h6 className="">Carbon Credit Price</h6>
                        <div>
                            <p>TCC</p>
                            <p>{navDiagramme1.quantity}</p>
                            <p>€</p>
                        </div>
                    </div>

                    <div className='boxGraph'></div>
                </article>

                <article className="boxGraph01">

                    <ul className='filter00_3'>
                        <li className={navDiagramme2.num === 1 ? 'navDiag' : ''} onClick={() => setNavDiagramme2({
                            num: 1,
                            quantity:214,
                            diagramme : 'graph00'
                        })}>Day</li>
                        <li className={navDiagramme2.num === 2 ? 'navDiag' : ''} onClick={() => setNavDiagramme2({
                            num: 2,
                            quantity:521,
                            diagramme : 'graph00'
                        })}>Month</li>
                        <li className={navDiagramme2.num === 3 ? 'navDiag' : ''} onClick={() => setNavDiagramme2({
                            num: 3,
                            quantity:987,
                            diagramme : 'graph00'
                        })}>Year</li>
                    </ul>

                    <div className="boxTitle">
                        <h6 className="">Carbon Credit Transactions</h6>
                        <div>
                            <p>Total</p>
                            <p>{navDiagramme2.quantity}</p>
                        </div>
                    </div>

                    <div className='boxGraph'></div>
                </article>

            </section>
        </main>
    );
}

export default Wallet;