import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './CardItem.module.css';


interface CardItemProps {
  item: {
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
}

const CardItem = (props: CardItemProps) => (
  <div className={`col ${styles.CardItemCol}`}>
    <img src={props.item.image_large} className={styles.CardItemImage} />
    <p className={`${styles.CardItemPrice} text text_type_digits-default`}>
      <CurrencyIcon type="secondary" />
      {props.item.price}
    </p>
    <p className={`${styles.CardItemName} text text_type_digits-default`}>{props.item.name}</p>
  </div>
)

export default CardItem;
