import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ModalItem from '../ModalItem/ModalItem';
import styles from './CardItem.module.css';


interface CardItemProps {
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

interface CardItemState {
  isShow?: boolean
}

const CardItem = (props: CardItemProps) => {

  const [isShow, setIsShow] = React.useState(false)


  const openModal = (item: CardItemProps) => {
    setIsShow(!isShow)
  }

  return (
    <div className={`col ${styles.CardItemCol}`} onClick={openModal.bind(this, props)}>
      <img src={props.image_large} className={styles.CardItemImage} />
      <p className={`${styles.CardItemPriceLine}`}>
        <span className={`text text_type_digits-default ${styles.CardItemPrice}`}>
          {props.price}
        </span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${styles.CardItemName} text text_type_main-medium`}>{props.name}</p>
      {isShow && <ModalItem {...props} />}
    </div>
  )
}

export default CardItem;
