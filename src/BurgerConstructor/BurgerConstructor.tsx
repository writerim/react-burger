import React, { FC } from 'react';
import styles from './BurgerConstructor.module.css';

interface BurgerConstructorProps {}

const BurgerConstructor: FC<BurgerConstructorProps> = () => (
  <div  data-testid="BurgerConstructor">
    BurgerConstructor Component
  </div>
);

export default BurgerConstructor;
