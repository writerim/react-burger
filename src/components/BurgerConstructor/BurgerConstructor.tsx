import React, { FC } from 'react';
import styles from './BurgerConstructor.module.css';
import ItemList from './ItemListIngridients/ItemListIngridients';
import SummaryPrice from '../BurgerIngredients/SummaryPrice/SummaryPrice';
import { IngridientInterface } from '../../interfaces/inridient_interface';


interface BurgerConstructorProps{
  data : IngridientInterface[]
}


const BurgerConstructor = (props: BurgerConstructorProps) => {

  const totalPrice = (data: IngridientInterface[]): number => {
    let totalPrice = 0
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      totalPrice += element.price
    }
    return totalPrice
  }

  return (
    <div className='row' data-testid="BurgerConstructor">
      <ItemList items={props.data} />
      <SummaryPrice totalPrice={totalPrice(props.data)} />
    </div>
  )
};

export default BurgerConstructor;
