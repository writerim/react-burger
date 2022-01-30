import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, useState } from 'react';
import { SummaryPriceProps } from '../../../interfaces/summary_price';
import OrderDetails from '../OrderDetails/OrderDetails';
import styles from './SummaryPrice.module.css';

const SummaryPrice = (props: SummaryPriceProps) => {

  const [isShowOrderDetail, setisShowOrderDetail] = useState(false)

  const showIngridientDetails = () => {
    setisShowOrderDetail(!isShowOrderDetail)
  }

  return (
    <div className={styles.SummaryPrice} data-testid="SummaryPrice">
      <span className={`text text_type_main-medium ${styles.Price}`}>
        {props.totalPrice}
        <span className={styles.PriceIcon}>
          <CurrencyIcon type="primary" />
        </span>
      </span>
      <Button type="primary" size="large" onClick={showIngridientDetails}>
        Оформить заказ
      </Button>
      {isShowOrderDetail && <OrderDetails/>}
    </div>
  )
};

export default SummaryPrice;
