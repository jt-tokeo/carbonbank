import '../../css/Menu.css';
import { useTranslation } from 'react-i18next';
import MenuHorizontal from './InvestorMenuComponents/MenuHorizontal';
import MenuVertical from './InvestorMenuComponents/MenuVertical';

function InvestorMenu() {

    const { t, i18n } = useTranslation();

    return (
        <header>
            <MenuHorizontal
                t={t}
                i18n={i18n}
            />
            <MenuVertical 
                t={t}
            />
        </header>
    );
}

export default InvestorMenu;