import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../../context/ContextConnection';

/**
 * 
 * @param {*} props.setValid
 * @param {} props.false 
 * @returns 
 */
const Estimate = (props) => {
    const { setAccount, Api } = useContext(DataContext);
    const [values, setValues] = useState({
        amount: '',
        unit: '',
        project: ''
    });
    const [dataFetch, setDataFetch] = useState({
        data: []
    });


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        Api({ type: 'project' }, setDataFetch);
    }, [Api, setDataFetch]);

    function Submit(event) {
        event.preventDefault();
        props.setValid(true);
    }

    console.log(dataFetch);

    const cost = Costs(dataFetch.data, values, props.false);

    const carbon = Carbons(dataFetch.data, values, props.false);

    return (
        <div className='boxEstimate'>
            <form class="form00" onSubmit={Submit}>
                <div className='boxCalcul'>
                    <span className='StyleInput'>
                        <label>{props.label1}</label>
                        <input type="text" name="amount" onChange={handleChange} />
                    </span>


                    <select className="select01" name="unit" onChange={handleChange}>
                        <option value={props.false}>{props.false}</option>
                    </select>

                    <select className="select01" name="project" onChange={handleChange}>
                        <option value="">Choose a project</option>
                        {dataFetch.data.map((data, i) =>
                            <option value={i} key={i}>{data.name}</option>
                        )}
                    </select>

                    <input className="select01" type="submit" value="Estimate" />
                </div>

                <div className='boxResult'>
                    

                    {props.valid === true ? (
                        <article>
                            <p>Estimated Cost:</p><button className='select01'>{'€' + cost}</button>
                            {/*<p>Amount of Carbon Offset: {carbon}KG</p>
                            <p>Project: {values.project}</p>*/}
                        </article>
                    ) : null}
                    <button className='select00'><Link to="/account/billing">Add billing to purchase</Link></button>
                </div>

            </form>


        </div>
    );
};

/** Calculat the cost of the carbon kg 
 * 
 * @param {} api
 * @param {} values
 * @param {} units
 * @returns the costs of the carbon
*/
function Costs(api, values, units) {
    const costs = api.map((costs) => costs.price)
    console.log(costs);
    let unit = units
    if (values.unit !== '') {
        unit = values.units;
    }
    console.log(unit);
    if (unit === 'kg') {
        let price = costs[values.project] * values.amount;
        if (price > 0.02) {
            return price;
        } else {
            return 0.02;
        }
    } else if (unit === 'EUR') {
        return values.amount;
    }
}

/** Calculat the carbon kg need to compensate 
 * 
 * @param {} api
 * @param {} values
 * @param {} units
 * @returns the number of carbon kg
*/
function Carbons(api, values, units) {
    const costs = api.map((costs) => costs.price)
    console.log(costs);
    let unit = units
    if (values.unit !== '') {
        unit = values.units;
    }
    console.log(unit);
    if (unit === 'EUR') {
        let price = values.amount / costs[values.project];
        return Math.round(price);
    } else if (unit === 'kg') {
        return values.amount;
    }
}

export default Estimate;