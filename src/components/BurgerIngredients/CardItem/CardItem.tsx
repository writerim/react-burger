import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import ModalItem from '../ModalItem/ModalItem';
import styles from './CardItem.module.css';


interface CardItemState {
  isShow?: boolean
}

const CardItem = (props: IngridientInterface) => {

  const [isShow, setIsShow] = React.useState(false)


  const openModal = (item: IngridientInterface) => {
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
