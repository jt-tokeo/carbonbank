import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
import DataContext from '../../context/ContextConnection';

const Developer = () => {

    const { setAccount } = useContext(DataContext);

    const debug = [
        { id: 'created', name: 'Created', classth: '', classtd: '' },
        { id: 'environment', name: 'Environment', classth: '', classtd: '' },
        { id: 'request', name: 'Request', classth: '', classtd: '' },
        { id: 'response', name: 'Response', classth: '', classtd: '' },
    ];

    return (
        <main className='mainInvestor mainInvestorDev'>

            <section>
                <article className='stat01'>
                    <h5>Your Key</h5>

                    <div className='keyBox00'>
                        <h6 className='keyboxSandbox'>Sandbox</h6>
                        <div className='keybox00number'>
                            <p>21fbe8b97a7ce355</p>
                            <button className='buttonCopy'>Copy</button>
                        </div>
                    </div>

                    <div className='keyBox00'>
                        <h6 className='keyboxProduc'>Production</h6>
                        <div className='keybox00number'>
                            <p><Link to="/account" onClick={() => setAccount('billing')} >Enable Billing</Link> for Production Key</p>
                            <button className='buttonCopy'>Copy</button>
                        </div>
                    </div>

                </article>

                <article className='stat02'>
                    <h5>APi Doc</h5>
                    <p>Full documentation for our current API (V 2.0) lives at </p>
                    <button className='buttonCopy'>Documentation</button>
                </article>
            </section>

            {/*}
            <section>
                <h5>API Docs</h5>
                <p>Full documentation for our current API lives at docs.</p>
            </section>
            
            */}
            <section>
                <h5>API Debugger</h5>
            </section>
            <section>
                <p>The debugger shows a list of API calls for your account.</p>
            </section>
            
            <div className='boxTableShadowDev'>
                <Table info={debug} fetch={{ type: '' }} />
            </div>
            {/*<button>View All API Calls &#10137;</button>*/}
        </main>
    );
};

export default Developer;