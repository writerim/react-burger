import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import styles from './OrderDetails.module.css';


interface OrderDetailsProps {
  totalPrice: number
}

const OrderDetails = ({ totalPrice }: OrderDetailsProps) => (
  <div className={styles.SummaryModal}>
    <p className={`text text_type_digits-large ${styles.TotalPriceModal}`}>
      {totalPrice}
    </p>
    <p className={`text text_type_main-default ${styles.IdOrderModal}`}>
      Идентификатор заказа
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
);

export default OrderDetails;
