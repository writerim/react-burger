import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDrag } from 'react-dnd';
import { IngredientInterface } from '../../../interfaces/inredientInterface';
import { SET_CURENT_INGREDIENT } from '../../../services/actions/curentIngredient';
import { AppDispatch, useDispatch } from '../../../types/dispatch';
import { useSelector } from '../../../types/selector';
import IngridientDetails from '../../IngridientDetails/IngridientDetails';
import Modal from '../../Modal/Modal';
import styles from './CardItem.module.css';


const CardItem = (props: IngredientInterface) => {

  const [isShowDetail, setIsShowDetail] = React.useState(false)

  const selectedIngredients = useSelector(store => store.curentIngredient)

  const countUsedIngredient = useSelector(state => {
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
      playground: item
    })
    window.history.replaceState(`ingredient`,`/ingredients/${item._id}`,`/ingredients/${item._id}`);
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
