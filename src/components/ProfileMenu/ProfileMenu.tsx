import { NavLink } from "react-router-dom"
import styles from "./ProfileMenu.module.css"

export const ProfileMenu = () => {

    const classNameLi = styles.item + ' text text_type_main-medium'

    return (
        <ul className={styles.menu}>
            <li className={classNameLi}>
                <NavLink to="/profile" className={styles.link + ' text_color_inactive'}>Профиль</NavLink>
            </li>
            <li className={classNameLi}>
                <NavLink to="/profile/orders" className={styles.link + ' text_color_inactive'}>История заказов</NavLink>
            </li>
            <li className={classNameLi}>
                <span className={styles.link + ' text_color_inactive'}>Выйти</span>
            </li>
        </ul>
    )
}