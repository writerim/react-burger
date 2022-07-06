import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { getIngredientsData } from '../../services/orderDetail';
import { useDispatch } from '../../types/dispatch';
import { useSelector } from '../../types/selector';
import styles from './OrderDetails.module.css';


const OrderDetails = () => {

  const dispatch = useDispatch()


  let orderDetailResult = useSelector(state => state.order)
  let selectedIngredients = useSelector(state => state.selectedIngredients)

  useEffect(() => {
    getIngredientsData(selectedIngredients,dispatch)
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
