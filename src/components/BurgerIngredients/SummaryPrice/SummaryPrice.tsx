import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './SummaryPrice.module.css';

interface SummaryPriceProps {
  total_price: number;
}

const SummaryPrice: FC<SummaryPriceProps> = (props) => (
  <div className={styles.SummaryPrice} data-testid="SummaryPrice">
    <span className={`text text_type_main-medium ${styles.Price}`}>
      {props.total_price}
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
