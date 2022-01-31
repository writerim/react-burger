import { Button, CheckMarkIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, useState } from 'react';
import { SummaryPriceProps } from '../../../interfaces/summary_price';
import Modal from '../../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import styles from './SummaryPrice.module.css';

const SummaryPrice = (props: SummaryPriceProps) => {

  const [isShowOrderDetail, setIsShowOrderDetail] = useState(false)

  const showIngridientDetails = () => {
    setIsShowOrderDetail(!isShowOrderDetail)
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


      {isShowOrderDetail &&
        <Modal setShow={setIsShowOrderDetail}>
          <div className={styles.SummaryModal}>
            <p className={`text text_type_digits-large ${styles.TotalPriceModal}`}>
              {props.totalPrice}
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
        </Modal>
      }
    </div>
  )
};

export default SummaryPrice;
