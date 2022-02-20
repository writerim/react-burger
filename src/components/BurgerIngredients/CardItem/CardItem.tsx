import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import { SET_CURENT_INGREDIENT } from '../../../services/actions/curent_ingredient';
import IngridientDetails from '../../IngridientDetails/IngridientDetails';
import Modal from '../../Modal/Modal';
import styles from './CardItem.module.css';

const CardItem = (props: IngredientInterface) => {

  const [isShowDetail, setIsShowDetail] = React.useState(false)

  let dispatch = useDispatch()

  const openModal = (item: IngredientInterface) => {
    setIsShowDetail(!isShowDetail)
    dispatch({
      type: SET_CURENT_INGREDIENT,
      playground: item
    })
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
        <IngridientDetails />
      </Modal>}
    </>
  )
}

export default CardItem;
