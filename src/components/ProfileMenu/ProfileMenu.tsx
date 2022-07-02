import { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import {NavigateFunction, NavLink, useNavigate } from "react-router-dom"
import { logout } from "../../services/authEtc";
import { AppDispatch } from "../../types/dispatch";
import styles from "./ProfileMenu.module.css"

export const ProfileMenu = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const classNameLi = styles.item + ' text text_type_main-medium'

    const redirect = () => {
        navigate('/login')
    };

    const onLogout = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(logout(redirect));
    }

    return (
        <ul className={styles.menu}>
            <li className={classNameLi}>
                <NavLink to="/profile" className={styles.link + ' text_color_inactive'}>Профиль</NavLink>
            </li>
            <li className={classNameLi}>
                <NavLink to="/profile/orders" className={styles.link + ' text_color_inactive'}>История заказов</NavLink>
            </li>
            <li className={classNameLi} onClick={onLogout}>
                <span className={styles.link + ' text_color_inactive'}>Выйти</span>
            </li>
        </ul>
    )
}