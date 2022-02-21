import { Elements } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CheckoutForm from '../../components/Stripe/CheckoutForm';
import Table from '../../components/Table/Table';
import DataContext from '../../context/ContextConnection';
import { Box, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';


const Account = () => {

    let params = useParams();

    const { user, Api, stripePromise } = useContext(DataContext);
    const [card, setCard] = useState(false);
    const [values, setValues] = useState({
        user: '',
        bar: '',
        code: ''
    })
    const [clientSecret, setClientSecret] = useState("")
    // I don't know why but if you don't put dataJson: {prodEnabled: content} it doesn't work
    const [dataFetch, setDataFetch] = useState({
        dataJson: {
            prodEnaled: ""
        }
    });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        Api({ type: 'user', token: user.token ? user.token : localStorage.getItem('token'), id: user.id ? user.id : localStorage.getItem('id') }, setDataFetch);
        Api({type: 'create-payment-intent'}, setClientSecret)
    }, [Api, setDataFetch, user]);

    console.log(dataFetch);

    const users = [
        { id: 'name', name: 'Name', classth: '', classtd: '' },
        { id: 'email', name: 'Email', classth: '', classtd: '' },
        { id: 'role', name: 'Role', classth: '', classtd: '' }
    ];

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    function Submit(event) {
        event.preventDefault();
        localStorage.setItem('card', JSON.stringify(values))
    }

    const dataCard = JSON.parse(localStorage.getItem('card'));

    return (
        <main className='mainInvestor mainInvestorAccount'>
            <section className='boxGraph00 '>

                <ul className='filter00_3'>
                    <Link to="/account" className={params.typeAccount === undefined ?"navDiag":""}>Overview</Link>
                    <Link to="/account/users" className={params.typeAccount === 'users' ?"navDiag":""}>Users</Link>
                    <Link to="/account/billing" className={params.typeAccount === 'billing' ?"navDiag":""}>Billing</Link>
                </ul>
                {params.typeAccount === undefined ? (
                <>
                      <div className='boxaccountTable'>
                   {open === false? (
                       <>
                       <Button variant="outlined" startIcon={<Edit/>} sx={{ m: 1, ml: '90%', color: 'black', borderColor: 'black'}} onClick={() => setOpen(true)}>Edit</Button>
                        <div className='boxInfo'>
                        <h6>Account Name</h6>
                        <div>
                            <p>{dataFetch.dataJson.accountName}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Account Owner</h6>
                        <div>
                            <p>{dataFetch.dataJson.firstName + ' ' + dataFetch.dataJson.name}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Production Enabled ?</h6>
                        <div>
                            <p>{dataFetch.dataJson.prodEnaled === true ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Weight Units</h6>
                        <div>
                            <p>{dataFetch.dataJson.weightUnits}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Display Public Pages</h6>
                        <div>
                            <p>{dataFetch.dataJson.displayPublicPages === true? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Sustainability Report</h6>
                        <div>
                            <p>{dataFetch.dataJson.sustainabilityReport}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Url to Site</h6>
                        <div>
                            <p>{dataFetch.dataJson.site? dataFetch.dataJson.site : "Not Set"}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Url to Logo</h6>
                        <div>
                            <p>{dataFetch.dataJson.logo? dataFetch.dataJson.logo : "Not Set"}</p>
                        </div>
                    </div></>
                   ) : (
                       <form className='boxaccountTable'>
                           <Box
                            component='div'
                            sx={{ml: '80%', '@media (max-width: 1706px)':{ml : '70%', '@media (max-width: 1306px)': {ml: '60%'}}}}
                           >
                            <Button variant='outlined' sx={{ m: 1, color: 'black', borderColor: 'black' }} onClick={() => setOpen(false)}>Cancel</Button>
                            <Button variant='outlined' sx={{ m: 1, color: 'black', borderColor: 'black'}} type='submit'>Save</Button>
                           </Box>
                            <div className='boxInfo'>
                        <h6>Account Name</h6>
                        <div>
                            <input type="text" value={dataFetch.dataJson.accountName}/>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Account Owner</h6>
                        <div>
                            <p>{dataFetch.dataJson.firstName + ' ' + dataFetch.dataJson.name}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Production Enabled ?</h6>
                        <div>
                            <p>{dataFetch.dataJson.prodEnaled === true ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Weight Units</h6>
                        <div>
                            <select name="" id="" value={dataFetch.dataJson.weightUnits}>
                                <option value="">Select ...</option>
                                <option value="Lbs">Lbs</option>
                                <option value="Kg">Kg</option>
                            </select>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Display Public Pages</h6>
                        <div>
                            <select name="" id="" value={dataFetch.dataJson.displayPublicPages}>
                                <option value="">Select ...</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Sustainability Report</h6>
                        <div>
                            <p>{dataFetch.dataJson.sustainabilityReport}</p>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Url to Site</h6>
                        <div>
                            <input type="text" value={dataFetch.dataJson.site}/>
                        </div>
                    </div>
                    <div className='boxInfo'>
                        <h6>Url to Logo</h6>
                        <div>
                            <input type="text" value={dataFetch.dataJson.logo} />
                        </div>
                    </div>
                       </form>
                   )}
                </div>
                </>
            ) : params.typeAccount === 'users' ? (
                <>
                    <Table info={users} fetch={{ type: 'user', token: user.token ? user.token : localStorage.getItem('token'), id: user.id ? user.id : localStorage.getItem('id') }} />
                </>
            ) : params.typeAccount === 'billing' ? (
                <>
                    <img src="" alt="" />
                    { localStorage.getItem('card')? (
                        <section>
                            <h5>Your Card</h5>
                            <p>Name of user: {dataCard.user}</p>
                            <p>Bar Code: {dataCard.bar}</p>
                        </section>
                    ) : (

                        
                        <section>
                            {card === true? (
                                <>
                                    {clientSecret && (
                                    <Elements options={options} stripe={stripePromise}>
                                        <CheckoutForm />
                                    </Elements>
                                    )}
                                </>
                            ) : (
                                <article className='accountCard'>
                                    <button className="select01" onClick={() => setCard(true)}>Add a card</button>
                                    
                                </article>
                            )}
                            </section>
                    ) }
                </>
            ) : null}

            </section>
            

        
           
        </main>
    );
};

export default Account;