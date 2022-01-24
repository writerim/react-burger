import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderStyle from './AppHeader.module.css'
import BtnGenerator from './BtnGenerator/BtnGenerator';
import BtnOrders from './BtnOrders/BtnOrders';
import BtnProfile from './BtnProfile/BtnProfile';


function AppHeader() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <BtnGenerator />
                <BtnOrders/>
                <div className={AppHeaderStyle.logo}>
                    <Logo />
                </div>
                <BtnProfile/> 
            </div>
        </nav>
    )
}

export default AppHeader;