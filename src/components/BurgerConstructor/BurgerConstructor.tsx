import React, { FC } from 'react';
import styles from './BurgerConstructor.module.css';
import data from '../../utils/data_selected';
import ItemList from './ItemListIngridients/ItemListIngridients';
import SummaryPrice from '../BurgerIngredients/SummaryPrice/SummaryPrice';

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

class BurgerConstructor extends React.Component {

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
        <ItemList items={data} />
        <SummaryPrice total_price={this.total_price(data)} />
      </div>
    )
  }
};

export default BurgerConstructor;
