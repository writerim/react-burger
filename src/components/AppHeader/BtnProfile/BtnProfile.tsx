import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './BtnProfile.module.css';
import stylesAppHeader from './../AppHeader.module.css';

interface BtnProfileProps {}

const BtnProfile: FC<BtnProfileProps> = () => (
  <a className={ `${styles.BtnProfile} ${stylesAppHeader.Btn}` } data-testid="BtnProfile">
    <ProfileIcon type="primary"/>
    <span className={stylesAppHeader.BtnTitle}>Личный кабинет</span>
  </a>
);

export default BtnProfile;
