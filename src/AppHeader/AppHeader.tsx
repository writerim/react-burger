import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderStyle from './AppHeader.module.css'
import BtnGenerator from './BtnGenerator/BtnGenerator';
import BtnOrders from './BtnOrders/BtnOrders';
import BtnProfile from './BtnProfile/BtnProfile';


function AppHeader() {
    return (
        <div className={AppHeaderStyle.AppHeader}>
            <BtnGenerator/>
            <BtnOrders/>
            <div className={AppHeaderStyle.logo}>
                <Logo />
            </div>
            <BtnProfile/> 
        </div>
    )
}

export default AppHeader;