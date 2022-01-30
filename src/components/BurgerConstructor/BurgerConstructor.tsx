import React, { FC } from 'react';
import styles from './BurgerConstructor.module.css';
import ItemList from './ItemListIngridients/ItemListIngridients';
import SummaryPrice from '../BurgerIngredients/SummaryPrice/SummaryPrice';


interface BurgerConstructorProps{
  data : Ingridient[]
}
interface Ingridient {
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  _id: string;
  __v: number;
}

const BurgerConstructor = (props: BurgerConstructorProps) => {

  const totalPrice = (data: Ingridient[]): number => {
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
