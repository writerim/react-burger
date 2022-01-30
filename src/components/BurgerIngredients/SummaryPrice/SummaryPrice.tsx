import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './SummaryPrice.module.css';

interface SummaryPriceProps {
  totalPrice: number;
}

const SummaryPrice = (props: SummaryPriceProps) => (
  <div className={styles.SummaryPrice} data-testid="SummaryPrice">
    <span className={`text text_type_main-medium ${styles.Price}`}>
      {props.totalPrice}
      <span className={styles.PriceIcon}>
        <CurrencyIcon type="primary" />
      </span>
    </span>
    <Button type="primary" size="large">
      Оформить заказ
    </Button>
  </div>
);

export default SummaryPrice;
