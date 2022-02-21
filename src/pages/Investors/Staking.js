import React,{useState} from 'react';
import '../../css/Menu.css';
import '../../css/wallet.css';
import graphStaking from '../../media/img/graph_staking_01.jpg';




function Staking() {

    const [navDiagramme, setNavDiagramme] = useState({
        num: 1,
        quantity:52,
        diagramme : 'graph00'
    });

    return (
        <main className='mainInvestor mainInvestorStacking'>

            <section className="col3 InvestorBox00">
                <article className="stat01 boxBalance00 boxExchange">
                    <h5>My Staking</h5>

                    <div>
                        <p className="yellowLite">154 TCC</p>
                    </div>

                    <div className="boxInput00">
                        <select className="select01" name="binp" >
                            <option value="">Stake</option>
                            <option value="">Withdraw</option>
                        </select>

                        <input type="text" placeholder="amount" name="value"  />
                    </div>
                </article>

                <article className="stat01 boxBalance00 boxExchange">
                    <h5>My Rewards</h5>

                    <div className=''>
                        <p className="yellowLite">4.2 TCC</p>
                    </div>

                    <div className="boxInput00">
                        <select className="select01" name="brew">
                            <option value="">Withdraw</option>
                            <option value="">Offset</option>
                        </select>

                        <input type="text" placeholder="amount" name="value"  />
                    </div>
                </article>

                <article className="stat01 boxHsitory00">
                    <h5>History</h5>
                    <div className='boxlist00'>
                        <div className="listHistory00">

                            <div className='pictobuy00'>

                            </div>
                            <div className='boxBuy'>
                                <p>Stacke TCC</p>
                                <p>100</p>
                            </div>

                            <div className="boxDate00">
                                <p>2022-02-18</p>
                                <p>14h39</p>
                            </div>
                        </div>

                        <div className="listHistory00">

                            <div className='pictobuy00'>

                            </div>
                            <div className='boxBuy'>
                                <p>Stacke TCC</p>
                                <p>54</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-01-26</p>
                                <p>17h53</p>
                            </div>
                        </div>
                    </div>
                </article>

            </section>

            <section className="col6M">
                <article className="boxGraph01">

                    <ul className='filter00_3'>
                        <li className={navDiagramme.num === 1 ? 'navDiag' : ''} onClick={() => setNavDiagramme({
                            num: 1,
                            quantity:52,
                            diagramme : 'graph00'
                        })}>Day</li>
                        <li className={navDiagramme.num === 2 ? 'navDiag' : ''} onClick={() => setNavDiagramme({
                            num: 2,
                            quantity:64,
                            diagramme : 'graph00'
                        })}>Month</li>
                        <li className={navDiagramme.num === 3 ? 'navDiag' : ''} onClick={() => setNavDiagramme({
                            num: 3,
                            quantity:120,
                            diagramme : 'graph00'
                        })}>Year</li>
                    </ul>

                    <div className="boxTitle">
                        <h6 className="">Global Users Stacking</h6>
                        <div>
                            <p>Total</p>
                            <p>{navDiagramme.quantity}</p>
                        </div>
                    </div>

                    <div className='boxGraph'></div>
                </article>
            </section>

        </main>
    );
}

export default Staking;