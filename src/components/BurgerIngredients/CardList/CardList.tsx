import React from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';


interface CardListProps {
  listItems?: IngridientInterface[];
  tab?: string
}

const CardList = (props: CardListProps) => (
  <div className={styles.BlockIngridients}>
    <p className="text text_type_main-medium">{props.tab}</p>
    <div className={styles.CardList}>
      {props.listItems && props.listItems.map(item => (
        <CardItem key={item._id} {...item} />
      ))}
    </div>
  </div>
)

export default CardList;
