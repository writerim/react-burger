import ItemListIngridients from './ItemListIngridients/ItemListIngridients';
import { IngridientInterface } from '../../interfaces/inridient_interface';
import styles from './BurgerConstructor.module.css';
import { useCallback, useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

interface BurgerConstructorProps {
  data: IngridientInterface[]
}


const BurgerConstructor = (props: BurgerConstructorProps) => {

  const totalPrice = useCallback((data: IngridientInterface[]): number => {
    let totalPrice = 0
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      totalPrice += element.price
    }
    return totalPrice
  }, [props])

  const [isShowOrderDetail, setIsShowOrderDetail] = useState(false)

  const showIngridientDetails = () => {
    setIsShowOrderDetail(!isShowOrderDetail)
  }

  return (
    <div data-testid="BurgerConstructor">
      <ItemListIngridients items={props.data} />

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
          <OrderDetails ingridients={props.data} totalPrice={totalPrice(props.data)} />
        </Modal>
      }
    </div>
  )
};


export default BurgerConstructor;
