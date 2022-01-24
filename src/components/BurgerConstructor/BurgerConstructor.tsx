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

class BurgerConstructor extends React.Component <BurgerConstructorProps> {

  total_price = (data: Ingridient[]): number => {
    let total_price = 0
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      total_price += element.price
    }
    return total_price
  }

  render(): React.ReactNode {
    return (
      <div className='row' data-testid="BurgerConstructor">
        <ItemList items={this.props.data} />
        <SummaryPrice total_price={this.total_price(this.props.data)} />
      </div>
    )
  }
};

export default BurgerConstructor;
