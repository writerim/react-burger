import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsData } from '../../services/orderDetail';
import { RootState } from '../../services/reducers';
import { AppDispatch } from '../../types/dispatch';
import styles from './OrderDetails.module.css';


const OrderDetails = () => {

  const dispatch = useDispatch<AppDispatch>()

  let orderDetailResult = useSelector((state: RootState) => state.order)
  let selectedIngredients = useSelector((state: RootState) => state.selectedIngredients)

  useEffect(() => {
    dispatch(getIngredientsData(selectedIngredients))
  }, [selectedIngredients])

  return (
    <div className={styles.SummaryModal}>
      <p className={`text text_type_digits-large ${styles.TotalPriceModal}`}>
        {orderDetailResult.number}
      </p>
      <p className={`text text_type_main-default ${styles.IdOrderModal}`}>
        {orderDetailResult.name}
      </p>
      <p className={`text text_type_main-default ${styles.IconStatusModal}`}>
        <CheckMarkIcon type="primary" />
      </p>
      <p className={`text text_type_main-default ${styles.TextStatusModal}`}>
        Ваш заказ начали оформлять
      </p>
      <p className={`text text_type_main-default text_color_inactive ${styles.DescriptionModal}`}>
        Дождитесь готовоности на орбитальной станции
      </p>
    </div>
  )
};

export default OrderDetails;
