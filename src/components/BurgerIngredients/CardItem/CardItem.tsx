import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import ModalIngridientDetail from '../ModalIngridientDetail/ModalIngridientDetail';
import styles from './CardItem.module.css';


interface CardItemState {
  isShow?: boolean
}

const CardItem = (props: IngridientInterface) => {

  const [isShowDetail, setIsShowDetail] = React.useState(false)


  const openModal = (item: IngridientInterface) => {
    setIsShowDetail(!isShowDetail)
  }

  return (
    <>
      <div className={styles.CardItemCol} onClick={openModal.bind(this, props)}>
        <img src={props.image_large} className={styles.CardItemImage} />
        <p className={`${styles.CardItemPriceLine}`}>
          <span className={`text text_type_digits-default ${styles.CardItemPrice}`}>
            {props.price}
          </span>
          <CurrencyIcon type="primary" />
        </p>
        <p className={`${styles.CardItemName} text text_type_main-medium`}>{props.name}</p>
      </div>
      {isShowDetail && <ModalIngridientDetail ingridient={props} setIsShowDetail={setIsShowDetail} />}
    </>
  )
}

export default CardItem;
