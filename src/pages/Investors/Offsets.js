import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Estimate from '../../components/Object/Offsets/Estimate';
import { Button } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Certificat from '../../components/Object/Offsets/Certificat';
import EstimateCrypto from '../../components/Object/Offsets/EstimateCrypto';

const Offsets = () => {

    let params = useParams();

    const { t } = useTranslation();
    const [valid, setValid] = useState(false);

    return (
        <main className='mainInvestor mainOffset'>
            <section className='stat01'>
                <article className='col1'>
                    <ul className='filter00_3'>
                        <Link to="/offsets" className={params.typeOffsets === undefined ? "navDiag" : ""} onClick={() => setValid(false) }>{t('Carbon')}</Link>
                        <Link to="/offsets/euros" className={params.typeOffsets === 'euros' ? "navDiag" : ""} onClick={() => setValid(false) }>{t('Euros')}</Link>
                        <Link to="/offsets/crypto" className={params.typeOffsets === 'crypto' ? "navDiag" : ""} onClick={() => setValid(false) }>{t('Crypto')}</Link>
                    </ul>
                </article>


                {params.typeOffsets === undefined ?
                    <Estimate label1='Amount of carbon' label2='Units' false='kg' valid={valid} setValid={setValid} />
                    : params.typeOffsets === 'euros' ?
                        <Estimate label1='Amount in Currency' label2='Currency' false='EUR' valid={valid} setValid={setValid} />
                        : params.typeOffsets === 'crypto' ?
                            <EstimateCrypto label1='Amount in Currency' label2='Currency' false='TCC' valid={valid} setValid={setValid} /> : null}
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
                                <p>12 TCC / 3000 Kg</p>
                            </div>

                            <div className="boxDate00">
                                <p>2022-02-17</p>
                                <p>15h38</p>
                            </div>

                            <Certificat 
                                date='17/02/2022'
                                co2='3'
                                user='Jean Mille'
                                nft="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                            />
                        </div>

                        <div className="listHistory00">

                            <div className='boxBuy'>
                                <p>Offset</p>
                                <p>8.5 TCC/ 2125 Kg</p>
                            </div>

                            <div className="boxDate00">
                                <p>2022-02-02</p>
                                <p>11h25</p>
                            </div>

                            <Certificat 
                                date='02/02/2022'
                                co2='2.125'
                                user='Jean Mille'
                                nft="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                            />
                        </div>
                      
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Offsets;