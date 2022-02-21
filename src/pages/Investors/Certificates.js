import '../../css/Menu.css';
import '../../css/wallet.css';
import graphCerti from '../../media/img/graph_certif_01.jpg';




function certificates() {


    return (
        <main className='mainInvestor mainInvestorCertificate'>

            <section className="InvestorBox00">
                <article className="stat01 boxBalance00 boxExchange">
                    <h5>My Balance</h5>

                    <div className=''>
                        <p className="yellowHard">145</p>
                        <p className="yellowLite">TCC</p>
                    </div>

                    <div className="boxInput00">
                        <select className="select01" name="" id="">
                            <option value="">Offset</option>
                        </select>

                        <input type="text" placeholder="amount" name="value" required />
                    </div>
                </article>

                <article className="stat01 boxHsitory00">
                    <h5>Latest Transactions</h5>
                    <div className='boxlist00'>
                        <div className="listHistory00">

                            <div className='pictobuy00'>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>91 TCC</p>
                            </div>

                        </div>

                        <div className="listHistory00">

                            <div className='pictobuy00'>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>91 TCC</p>
                            </div>

                        </div>

                        <div className="listHistory00">

                            <div className='pictobuy00'>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>91 TCC</p>
                            </div>

                        </div>

                        <div className="listHistory00">

                            <div className='pictobuy00'>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>91 TCC</p>
                            </div>

                        </div>


                        <div className="listHistory00">

                            <div className='pictobuy00'>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>91 TCC</p>
                            </div>

                        </div>

                        <div className="listHistory00">

                            <div className='pictobuy00'>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>91 TCC</p>
                            </div>

                        </div>


                    </div>
                </article>
            </section>

            <section>
                <article className="stat01 boxHsitory00">
                    <div className='BoxTitle'>
                        <h5>My Offset</h5> <p>Total :</p> <p>28.5 TCC</p>
                    </div>
                    <div className='boxlist00'>
                        <div className="listHistory00">

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>12 TCC</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <button className='select01'>withdraw</button>
                        </div>

                        <div className="listHistory00">

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>12 TCC</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <button className='select01'>withdraw</button>
                        </div>


                        <div className="listHistory00">

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>12 TCC</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <button className='select01'>withdraw</button>
                        </div>


                        <div className="listHistory00">

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>12 TCC</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <button className='select01'>withdraw</button>
                        </div>


                        <div className="listHistory00">

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>12 TCC</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <button className='select01'>withdraw</button>
                        </div>


                        <div className="listHistory00">

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>12 TCC</p>
                            </div>

                            <div className="boxDate00">
                                <p>2021-07-21</p>
                                <p>15h38</p>
                            </div>

                            <button className='select01'>withdraw</button>
                        </div>
                    </div>
                </article>
            </section>

            <section className='boxGraph00'>
                <ul className='filter00_3'>
                    <li>dede</li>
                    <li>dedeed</li>
                    <li>dede</li>
                </ul>

                <div className='marginL005'>
                    <p className='pAcrrocheBig02'>Global users offset</p>

                    <div className='boxGraph00Text'>
                        <span>2321.25</span>
                        <div></div>
                        <p>TCC</p>
                    </div>
                </div>

                <div className="graphSize graphUsers00">

                </div>

            </section>
        </main>
    );
}

export default certificates;