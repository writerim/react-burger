import ItemListIngredients from './ItemListIngredients/ItemListIngredients';
import styles from './BurgerConstructor.module.css';
import { useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';
import { IngredientsSorted } from '../../services/reducers/selectedIngredients';
import { IngredientInterface } from '../../interfaces/inredientInterface';
import { SET_SORT_INDEX_ELEMENT } from '../../services/actions/selectedIngredients';


const BurgerConstructor = () => {



  const dispatch = useDispatch()

  const selectedIngredients = useSelector((store: RootState) => store.selectedIngredients)

  const handleSortable = (itemDrop: string, moveToIndex: number) => {
    dispatch({
      type: SET_SORT_INDEX_ELEMENT,
      uuid: itemDrop,
      index: moveToIndex
    })
  }

  const totalPrice = (data: IngredientsSorted[]): number => {
    let totalPrice = 0
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      totalPrice += element.element.price
    }
    return totalPrice
  }

  const [isShowOrderDetail, setIsShowOrderDetail] = useState(false)

  const showIngridientDetails = () => {
    setIsShowOrderDetail(!isShowOrderDetail)
  }

  return (
    <div data-testid="BurgerConstructor">
      <ItemListIngredients onHandleSortable={handleSortable} />

      <div className={styles.SummaryPrice} data-testid="SummaryPrice">
        <span className={`text text_type_main-medium ${styles.Price}`}>
          {totalPrice(selectedIngredients)}
          <span className={styles.PriceIcon}>
            <CurrencyIcon type="primary" />
          </span>
        </span>
        <Button type="primary" size="large" onClick={showIngridientDetails}>
          Оформить заказ
        </Button>
      </div>

      {isShowOrderDetail &&
        <Modal setShow={setIsShowOrderDetail}>
          <OrderDetails />
        </Modal>
      }
    </div>
  )
};


export default BurgerConstructor;
