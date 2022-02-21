import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CarteBasket from '../components/CarteBasket';


function Basket() {
    const { t } = useTranslation();

    const cartes = ['Plane', 'Car', 'Bus', 'Train', 'Boat'];
    const reducer = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue);

    let ttc = [];

    return (
        <main>
            <section className="home Basket col5 displayFlexAlignCenterTop textCenter marginCenter">
                <div className="col6M displayCollumCenterV basketTop">
                    <h4>Your Offset</h4>
                    <div className="lignEnd50"></div>
                </div>

                <div className="col4M displayCollumCenterV basketTop2">
                    <h4>Your order</h4>
                    <div className="lignEnd50"></div>
                </div>

                <article className="col6M displayFlexSpace basketProduct">

                    {cartes.map((carte, i) => {
                        if (localStorage.getItem(carte)) {
                            return <CarteBasket
                                data={carte}
                                key={i}
                            />;
                        } else {
                            return null;
                        }
                    })}

                </article>


                <article className="col4M">
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
                                } else {
                                    return null
                                }
                            })}

                            <li className="marginT01"><div className="lignEnd"></div></li>
                            <li><p>TTC</p><p>{ttc.length === 0?null: parseFloat(ttc.reduce(reducer)).toFixed(2)}$</p></li>
                        </ul>
                    </div>
                    <Link to="/Buy"><div className="button01 marginT01"><p>Place order</p></div></Link>
                </article>
            </section>
        </main>
    );
}

export default Basket;