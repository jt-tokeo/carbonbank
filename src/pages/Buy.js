import { Box, TextField } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/Stripe/CheckoutForm';
import DataContext from '../context/ContextConnection';


function BuyCredits() {
    const { t, i18n } = useTranslation();
    const { Api, stripePromise } = useContext(DataContext);
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
      Api({type: 'create-payment-intent'}, setClientSecret)
    }, [])
    

    const cartes = ['Plane', 'Car', 'Bus', 'Train', 'Boat'];
    const reducer = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    let ttc = [];

    return (
        <main>
            <section className="home Basket col5 displayCenterTop textCenter marginCenter">
                <div className="col6M displayFlex">
                    <div className="col1 displayCollumCenterV basketTop">
                        <h4>Billing details</h4>
                        <div className="lignEnd50"></div>
                    </div>

                    <article className="marginB005 col1 displayFlexSpaceCenter input_wrap" required>

                        <Box
                            component="form"
                            sx={{}}
                            noValidate
                            autoComplete='off'
                        >
                            <div>
                                <TextField
                                    label={t('companyName')}
                                    type="text"
                                    size='small'
                                    sx={{ m: 1 }}
                                    fullWidth
                                    variant='standard'
                                    name='companyname'
                                    required
                                />
                            </div>
                            <div>
                                <TextField
                                    label={t('firstName')}
                                    type="text"
                                    size='small'
                                    sx={{ m: 1, width: '28.5ch' }}
                                    variant='standard'
                                    name='firstName'
                                    required
                                />
                                <TextField
                                    label={t('name')}
                                    type="text"
                                    size='small'
                                    sx={{ m: 1, width: '28.5ch' }}
                                    variant='standard'
                                    name='name'
                                    required
                                />
                            </div>
                            <h4 className="col1 textCenter marginT01">Offset Type (optional)</h4>
                            <div>
                                <TextField
                                    label={t('address')}
                                    type="text"
                                    size='small'
                                    sx={{ m: 1, width: '37ch' }}
                                    fullWidth
                                    variant='standard'
                                    name='address'
                                />
                                <TextField
                                    label={t('zipCode')}
                                    type="text"
                                    size='small'
                                    sx={{ m: 1, width: '20ch' }}
                                    fullWidth
                                    variant='standard'
                                    name='zipCode'
                                />
                            </div>
                            <div>
                                <TextField
                                    label={t('city')}
                                    type="text"
                                    size='small'
                                    sx={{ m: 1, width: '28.5ch' }}
                                    variant='standard'
                                    name='city'
                                />
                                <TextField
                                    label={t('country')}
                                    type="text"
                                    size='small'
                                    sx={{ m: 1, width: '28.5ch' }}
                                    variant='standard'
                                    name='country'
                                />
                            </div>
                            <div>
                                <TextField
                                    label={t('phone')}
                                    type="tel"
                                    size='small'
                                    sx={{ m: 1, width: '28.5ch' }}
                                    variant='standard'
                                    name='phone'
                                />
                            </div>

                            {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    )}
                            
                        </Box>
                    </article>

                  
                    </div>


                    <div className="col4M displayFlex">
                        <div className=" col1 displayCollumCenterV basketTop2">
                            <h4>Your order</h4>
                            <div className="lignEnd50"></div>
                        </div>
                        <div className="col1 YourProduct">
                            <ul>
                                <li><h4>Product</h4><h4>Price</h4></li>
                                <li><div className="lignEnd"></div></li>
                                {cartes.map((carte, i) => {
                                    if (localStorage.getItem(carte)) {
                                        let parse = JSON.parse(localStorage.getItem(carte));
                                        let price = parse.carbon / 103;
                                        ttc.push(price.toFixed(2));
                                        return <li key={i}><p>{carte}</p><p>{price.toFixed(2)} $</p></li>;
                                    }
                                })}
                                <li className="marginT01"><div className="lignEnd"></div></li>
                                <li><p>Subtotal</p><p>{ttc.length === 0 ? null : parseFloat(ttc.reduce(reducer)).toFixed(2)}$</p></li>
                             
                                <li><p>Every month</p><p>0$</p></li>
                           
                                <li><p>Recurring totals</p><p>{ttc.length === 0 ? null : parseFloat(ttc.reduce(reducer)).toFixed(2)}$</p></li>
                            </ul>
                        </div>
                        <Link className="col1" to="/Buy"><div className="button01 marginT01"><p>Place order</p></div></Link>
                    </div>
            </section>
        </main>
    );
}

export default BuyCredits;