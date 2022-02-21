import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataContext from '../../context/ContextConnection';
// import Api from '../Api';

const Table = (props) => {
    // Translate the text
    const { t } = useTranslation();
    // Retrive the element in all app
    const { Api } = useContext(DataContext);
    // Recover the data of the fetch
    const [dataFetch, setDataFetch] = useState({
        data: []
      });
    
    /** Make the fetch after the page load to add new data */
    useEffect(() => {
        //Fetch porps.fetch is needed
        Api(props.fetch, setDataFetch);
    }, [Api, setDataFetch, props]);

    console.log(dataFetch);
    console.log(props.fetch);

    return (
        <div className='boxTable'>
            <table>
                <thead>
                    <tr>
                        {props.info.map((info, i) =>
                            <th key={i} className={info.classhead}>{t(info.name)}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {/* Make the data of the table, the first map is for the number of tr need and add data to the other map for add information */}
                    {dataFetch.data.map((data, i) =>
                        <tr key={i}>{Tbody(data, props.info, t)}</tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

/**
 * 
 * @param {Objet} data It's the data of the fetch when the map have been make for catch one objet by one.
 * @param {Objet} info It's the array you need to make for say what you need in the table.
 * @param {Variable} t It's a variable, you put a string and give you the words or phrase.
 * @returns 
 */
function Tbody(data, info, t) {
    //
    return info.map((info,i) => {
        switch (info.id) {
            case 'accountName':
                return <td key={i}>{data.email}</td>;
            case 'accountOwner':
                return <td key={i}>{data.firstName + ' ' + data.name}</td>;
            case 'productionenabled':
                return <td key={i}>{data.prodEnabled === true ? t("yes") : t("no") }</td>
            case 'weightUnits':
                return <td key={i}>{data.weightUnits}</td>;
            case 'displayPublicPages':
                return <td key={i}>{data.displayPublicPages}</td>;
            case 'sustainabilityReport':
                return <td key={i}>{data.sustainabilityReport}</td>;
            case 'urlSite':
                return <td key={i}>{data.site}</td>;
            case 'logoUrl':
                return <td key={i}>{data.logo}</td>;
            case 'name':
                return <td key={i}>{data.firstName + ' ' + data.name + ( data.underRole ? " (" + data.underRole + ")" : "") }</td>;
            case 'email':
                return <td key={i}>{data.email}</td>;
            case 'role':
                return <td key={i}>{data.underRole === 'owner' || data.underRole === 'admin' ? 'admin' : 'user'}</td>;
            case 'date':
                return <td key={i}>{data.date}</td>;
            case 'status':
                return <td key={i}>{data.status}</td>;
            case 'carbon':
                return <td key={i}>{data.carbon}</td>;
            case 'project':
                return <td key={i}>{data.project}</td>;
            case 'notes':
                return <td key={i}>{data.notes}</td>;
            case 'creator':
                return <td key={i}>{data.creator}</td>;
            case 'dateStart':
                return <td key={i}>{data.dateStart}</td>;
            case 'dateEnd':
                return <td key={i}>{data.dateEnd}</td>;
            case 'file':
                return <td key={i}>{data.file}</td>;
            case 'cost':
                return <td key={i}>{data.cost}</td>;
            case 'tags':
                return <td key={i}>{data.tags}</td>;
            default:
                return null;
        }
    })
}