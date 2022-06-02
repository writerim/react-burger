import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './BtnProfile.module.css';
import stylesAppHeader from './../AppHeader.module.css';
import { NavLink } from 'react-router-dom';

interface BtnProfileProps {}

const BtnProfile: FC<BtnProfileProps> = () => (
  <NavLink to="/profile" className={ `${styles.BtnProfile} ${stylesAppHeader.Btn} text text_type_main-default` }>
    <ProfileIcon type="primary"/>
    <span className={stylesAppHeader.BtnTitle}>Личный кабинет</span>
  </NavLink>
);

export default BtnProfile;
