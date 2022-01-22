import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './CardItem.module.css';


interface CardItemProps {
  item: {
    name : string;
    type : string;
    proteins : number;
    fat : number;
    carbohydrates : number;
    calories : number;
    price : number;
    image : string;
    image_mobile : string;
    image_large : string;
    _id : string;
    __v : number;
  }
}

const CardItem = (props: CardItemProps) => (
  <div className={styles.CardItem} data-testid="CardItem">
    <img src={props.item.image_large}/>
    <p className="text text_type_digits-default">{props.item.price}</p>
    <CurrencyIcon type="secondary" />
    <p className="text text_type_digits-default">{props.item.name}</p>
  </div>
)

export default CardItem;
