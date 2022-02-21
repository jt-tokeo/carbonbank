import '../../css/Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import DataContext from '../../context/ContextConnection';

function AdminMenu() {
    const { setUser } = useContext(DataContext);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    function handleLangChange(event) {
        i18n.changeLanguage(event.target.value);

    }

    function disconnect(event) {
        event.preventDefault();
        setUser({});
        localStorage.clear();
        navigate('/');
    }
    return (
        <header>
            <nav className="navHeader">
                <ul className="menuLink">
                    <li><Link to="/">{t('home')}</Link></li>
                    <li><Link to="/admin/users">{t('users')}</Link></li>
                    <li><Link to="/admin/projects">{t('projects')}</Link></li>
                </ul>
                <ul className="menuConnect">
                    <li><Link to="/" onClick={disconnect}>{t('disconnect')}</Link></li>
                    <li>
                        <select name="lang" value={i18n.language} onChange={handleLangChange}>
                            <option className="langEng" value="en">en</option>
                            <option className="langFr" value="fr">fr</option>
                        </select>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default AdminMenu;