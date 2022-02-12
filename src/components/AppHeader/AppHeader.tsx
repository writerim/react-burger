import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css'
import BtnGenerator from './BtnGenerator/BtnGenerator';
import BtnOrders from './BtnOrders/BtnOrders';
import BtnProfile from './BtnProfile/BtnProfile';


function AppHeader() {
    return (
        <nav className={styles.Nav}>
            <div className={styles.NavCenter}>
                <div className={styles.LeftMenu}>
                    <BtnGenerator />
                    <BtnOrders />
                </div>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <div>
                    <BtnProfile />
                </div>
            </div>
        </nav>
    )
}

export default AppHeader;
