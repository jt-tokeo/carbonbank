import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Cadre from '../../components/Object/Cadre';
import DataContext from '../../context/ContextConnection';

const Dashboard = () => {
    const { t } = useTranslation();
    const { Api, user } = useContext(DataContext);
    const [dataFetch, setDataFetch] = useState({
        data: []
      });
    const [dataTransaction, setDataTransaction] = useState({
        data: []
      });
    const [navDiagramme, setNavDiagramme] = useState({
        num: 1,
        date: 'thanLastDay',
        diagramme : 'graph00',
        nbtrans : 1
    });

    if (user.role && user.token && user.id) {
        localStorage.setItem('role', user.role);
        localStorage.setItem('token', user.token);
        localStorage.setItem('id', user.id)
    }

    useEffect(() => {
        Api({ type: 'project' }, setDataFetch);
        Api({ type: 'transaction' }, setDataTransaction);
    }, [Api, setDataFetch]);

    function Carbon(data) {
        let carbon = 0;
        data.map((data) => {
            carbon = carbon + data.carbon
        })
        return carbon
    }

    return (
        <main className='mainInvestor mainInvestorDashboard'>
            <section className='boxStat00'>
                {/*<h2>{t('Total C02')}</h2>*/}
                <Cadre
                    title={t('last') + ' 30 ' + t('days')}
                    content={Carbon(dataTransaction.data)}
                    unit='kg'
                />
                <Cadre
                    title='Year-to-date'
                    content={/*Carbon(dataTransaction.data)*/346}
                    unit='kg'
                />
                <Cadre
                    title={t('last') + ' 365 ' + t('days')}
                    content={/*Carbon(dataTransaction.data)*/721}
                    unit='kg'
                />
            </section>
            <section className='boxGraph00'>
                <ul className='filter00_3'>
                    <li className={navDiagramme.num === 1 ? 'navDiag' : ''} onClick={() => setNavDiagramme({
                        num: 1,
                        date: 'thanLastDay',
                        diagramme: 'graph00',
                        nbtrans : 12
                    })}>{t('day')}</li>
                    <li className={navDiagramme.num === 2 ? 'navDiag' : ''} onClick={() => setNavDiagramme({
                        num: 2,
                        date: 'thanLastMonth',
                        diagramme : 'graph01',
                        nbtrans : 48
                    })}>{t('month')}</li>
                    <li className={navDiagramme.num === 3 ? 'navDiag' : ''} onClick={() => setNavDiagramme({
                        num: 3,
                        date: 'thanLastYear',
                        diagramme : 'graph02',
                        nbtrans : 146
                    })}>{t('years')}</li>
                </ul>

                <div className='marginL005'>
                    <p className='pAcrrocheBig02'>{/*dataTransaction.data.length*/navDiagramme.nbtrans} Transactions</p>

                    <div className='boxGraph00Text'>
                        <span>62%</span>
                        <div></div>
                        <p>{t(navDiagramme.date)}</p>
                    </div>
                </div>

                <div className={navDiagramme.diagramme}>

                </div>

            </section>

            <section className='boxMap00'>
                {/*<div>
                    <h5>{t('Green Activity')}</h5>
                    <Cadre
                        title='Greened Purchases'
                        content='0'
                    />
                </div>*/}

                <MapContainer
                    center={[51.505, -0.09]}
                    zoom={5}
                    className='mapInvestor'>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {dataFetch.data.map((project, i) => project.latitude && project.longitude ? <Marker position={[project.latitude, project.longitude]} key={i} /> : null)}
                </MapContainer>
            </section>
        </main>
    );
};

export default Dashboard;