import React from 'react';

const CarteBasket = (props) => {

    let parse = JSON.parse(localStorage.getItem(props.data));

    let price = parse.carbon/103;

    return (
        <article className="col5P displayCollumCenterV product_General">
            <h4>{props.data} </h4>
            <div className="lignEnd50 marginT005 marginB005"></div>
            <ul>
                <li><p>Price</p><p>{price.toFixed(2)}$</p></li>
                <li><p>Distance</p><p>{parse.distance}</p></li>
                <li><p>Number User</p><p>{parse.NbUser}</p></li>
                <li><p>Trip</p><p>{parse.NbMulty}</p></li>
                <li><p>Emission</p><p>{parse.carbon}</p></li>
                <li><p>Total</p><p>{price.toFixed(2)}$</p></li>
            </ul>
        </article>
    );
};

export default CarteBasket;