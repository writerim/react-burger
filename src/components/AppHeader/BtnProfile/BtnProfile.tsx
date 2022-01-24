import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './BtnProfile.module.css';

interface BtnProfileProps {}

const BtnProfile: FC<BtnProfileProps> = () => (
  <a className={styles.BtnProfile} data-testid="BtnProfile">
    <ProfileIcon type="primary"/>
    <span>Личный кабинет</span>
  </a>
);

export default BtnProfile;
