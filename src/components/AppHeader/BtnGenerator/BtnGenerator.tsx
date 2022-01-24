import React, { FC } from 'react';
import styles from './BtnGenerator.module.css';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'


interface BtnGeneratorProps {}

const BtnGenerator: FC<BtnGeneratorProps> = () => (
  <a href='' className={styles.BtnGenerator} data-testid="BtnGenerator">
    <BurgerIcon type="primary" />
      Конструктор
  </a>
);

export default BtnGenerator;
