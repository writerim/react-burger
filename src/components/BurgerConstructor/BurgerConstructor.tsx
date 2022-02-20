import ItemListIngredients from './ItemListIngredients/ItemListIngredients';
import { IngredientInterface } from '../../interfaces/inredient_interface';
import styles from './BurgerConstructor.module.css';
import { useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

interface BurgerConstructorProps {
  data: IngredientInterface[]
}


const BurgerConstructor = (props: BurgerConstructorProps) => {

  const totalPrice = (data: IngredientInterface[]): number => {
    let totalPrice = 0
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      totalPrice += element.price
    }
    return totalPrice
  }

  const [isShowOrderDetail, setIsShowOrderDetail] = useState(false)

  const showIngridientDetails = () => {
    setIsShowOrderDetail(!isShowOrderDetail)
    // Передача нужного ингридиента в стор
  }

  return (
    <div data-testid="BurgerConstructor">
      <ItemListIngredients items={props.data} />

      <div className={styles.SummaryPrice} data-testid="SummaryPrice">
        <span className={`text text_type_main-medium ${styles.Price}`}>
          {totalPrice(props.data)}
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
