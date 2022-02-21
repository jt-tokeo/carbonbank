import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Table/Table';

const Transactions = () => {

    let params = useParams();

    const { t } = useTranslation();

    const [value, setValue] = useState({
        startDate: '',
        endDate: ''
    });

    function handleChange(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }


    const history = [
        { id: 'date', name: 'Date', classth: '', classtd: '' },
        { id: 'status', name: 'Status', classth: '', classtd: '' },
        { id: 'cost', name: 'Costs', classth: '', classtd: '' },
        { id: 'carbon', name: 'Carbon (kg)', classth: '', classtd: '' },
        { id: 'tags', name: 'Tags', classth: '', classtd: '' },
        { id: 'project', name: 'Project', classth: '', classtd: '' },
        { id: 'notes', name: 'Note', classth: '', classtd: '' }
    ]

    const report = [
        { id: 'date', name: 'Date Created', classth: '', classtd: '' },
        { id: 'creator', name: 'Creator', classth: '', classtd: '' },
        { id: 'dateStart', name: 'Start Date', classth: '', classtd: '' },
        { id: 'dateEnd', name: 'End Date', classth: '', classtd: '' },
        { id: 'file', name: 'File', classth: '', classtd: '' }
    ]


    function modal(value, handleChange) {
        return (
            <>
                <p>{t('Select a start and end date to generate a CSV report of your transactions.')}</p>
                <form>
                    <label>{t('Start Date')}</label>
                    <input type="date" name="startDate" id="" value={value.startDate} onChange={handleChange} />
                    <label>{t('End Date')}</label>
                    <input type="date" name="endDate" id="" value={value.endDate} onChange={handleChange} />
                    <input type="submit" value={t('Generate CSV')} />
                </form>
            </>
        );
    }

    return (
        <main className='mainInvestor mainInvestorTransaction'>

            <Modal
                titre='Create Report'
                button='Create Reaport'
                data={modal(value, handleChange)}
                closebt='Cancel'
            />

            <section className=''>
                <div className='boxTableShadow'>
                    <ul className='filter00_2'>
                        <Link to="/transactions" className={params.typeTransactions == undefined?"navDiag":""}>{t('History')}</Link>
                        <Link to="/transactions/footprints" className={params.typeTransactions == "footprints"?"navDiag":""}>{t('Footprints')}</Link>
                        <Link to="/transactions/reports" className={params.typeTransactions == "report"?"navDiag":""}>{t('Report')}</Link>
                    </ul>
            {params.typeTransactions == undefined ? (
                <>
                    <article className='navfilter00'>
                        <div className='navfilter00Div'>
                            <select className="select01" name="" id="">
                                <option value="all">{t('All Transaction')}</option>
                                <option value="purchaces">Purchases</option>
                                <option value="estimtes">Estimates</option>
                            </select>
                        </div>

                        {/*<div className='icon-search'>
                            <input className="search00" type="text" placeholder='search' />
                        </div>*/}
                    </article>

                    <Table info={history} fetch={{ type: 'transaction ' }} />
                
                </>
            ) : params.typeTransactions== "footprints" ? (
                <>
                    <div className='boxTable'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Carbon (kg)</th>
                                    <th>Activity</th>
                                    <th>Tags</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                        <p>No Footprints</p>
                    </div>
                </>
            ) : params.typeTransactions== "reports" ? (
                <>
                    <Table info={report} fetch={{ type: 'report' }} />
                    {/*<button>Previous</button>
                    <button>Next</button>*/}
                </>
            ):(<></>)}</div>
            
            </section>
        </main>
    );
};

export default Transactions;