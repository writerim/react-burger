import React, { FC } from 'react';
import styles from './BtnGenerator.module.css';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import stylesAppHeader from './../AppHeader.module.css';



interface BtnGeneratorProps {}

const BtnGenerator: FC<BtnGeneratorProps> = () => (
  <a href='' className={ `${styles.BtnGenerator} ${stylesAppHeader.Btn} ${styles.BtnFirst} 
  text text_type_main-default` } 
  data-testid="BtnGenerator">
    <BurgerIcon type="primary" />
    <span className={stylesAppHeader.BtnTitle}>Конструктор</span>
  </a>
);

export default BtnGenerator;
