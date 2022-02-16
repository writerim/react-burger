import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import IngridientDetails from '../../IngridientDetails/IngridientDetails';
import Modal from '../../Modal/Modal';
import styles from './CardItem.module.css';

const CardItem = (props: IngredientInterface) => {

  const [isShowDetail, setIsShowDetail] = React.useState(false)

  const openModal = (item: IngredientInterface) => {
    setIsShowDetail(!isShowDetail)
  }

  return (
    <>
      <div className={styles.CardItemCol} onClick={openModal.bind(this, props)}>
        <img src={props.image_large} className={styles.CardItemImage} alt="" />
        <p className={`${styles.CardItemPriceLine}`}>
          <span className={`text text_type_digits-default ${styles.CardItemPrice}`}>
            {props.price}
          </span>
          <CurrencyIcon type="primary" />
        </p>
        <p className={`${styles.CardItemName} text text_type_main-medium`}>{props.name}</p>
      </div>
      {isShowDetail && <Modal title="Детали" setShow={openModal}>
        <IngridientDetails {...props} />
      </Modal>}
    </>
  )
}

export default CardItem;
