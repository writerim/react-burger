import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import { SET_CURENT_INGREDIENT } from '../../../services/actions/curent_ingredient';
import { RootState } from '../../../services/reducers';
import { uuid } from '../../../services/reducers/selected_ingredients';
import IngridientDetails from '../../IngridientDetails/IngridientDetails';
import Modal from '../../Modal/Modal';
import styles from './CardItem.module.css';


const CardItem = (props: IngredientInterface) => {

  const [isShowDetail, setIsShowDetail] = React.useState(false)

  const countUsedIngredient = useSelector((state: RootState) => {
    let filter = state.selectedIngredients.filter(ingredientSelected => ingredientSelected.element._id === props._id)
    if (props.type === 'bun') {
      return filter.length > 0 ? 2 : 0
    }
    return filter.length
  })

  const dispatch = useDispatch()

  const openModal = (item: IngredientInterface) => {
    setIsShowDetail(!isShowDetail)
    dispatch({
      type: SET_CURENT_INGREDIENT,
      playground: {
        element: item,
        index: 0,
        uuid: uuid()
      }
    })
  }

  const [, ref] = useDrag({
    type: 'ingredients',
    item: props,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });


  return (
    <>
      <div className={styles.CardItemCol}
        onClick={openModal.bind(this, props)}
        ref={ref}
      >
        {countUsedIngredient > 0 && <Counter count={countUsedIngredient} size="default" />}
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
