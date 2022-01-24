import React, { FC } from 'react';
import styles from './BurgerConstructor.module.css';
import data from '../../utils/data_selected';
import ItemList from './ItemListIngridients/ItemListIngridients';


interface BurgerConstructorProps {}

const BurgerConstructor = (props: BurgerConstructorProps) => (
  <div className='row' data-testid="BurgerConstructor">
    <ItemList items={data} />
  </div>
);

export default BurgerConstructor;
