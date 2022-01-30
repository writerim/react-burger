import React from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';


interface CardListProps {
  listItems?: IngridientInterface[];
  tab?: string
}

const CardList = (props: CardListProps) => (
  <div className='row'>
    <h2 className={styles.h2}>{props.tab}</h2>
    {props.listItems && props.listItems.map(item => (
      <CardItem key={item._id} {...item}/>
    ))}
  </div>
)

export default CardList;
