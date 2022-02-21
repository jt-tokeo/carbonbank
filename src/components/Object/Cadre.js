import React from 'react';
import { useTranslation } from 'react-i18next';

const Cadre = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <article className='stat00'>
            <h5>{t(props.title)}</h5>
            <p>{t(props.content)}{t(props.unit)}</p>
        </article>
    );
};

export default Cadre;