import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';


interface CardListI {
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

interface CardListProps {
  listItems?: CardListI[];
  tab?: string
}

const CardList = (props: CardListProps) => (
  <div className='row'>
    <h2 className={styles.h2}>{props.tab}</h2>
    {props.listItems && props.listItems.map(item => (
      <CardItem item={item} />
    ))}
  </div>
)

export default CardList;
