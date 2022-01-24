import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC , FocusEvent } from 'react';
import styles from './BtnOrders.module.css';

interface BtnOrdersProps {}

class BtnOrders extends React.Component {
  constructor(props: FC<BtnOrdersProps> ){
    super(props)
  }

  private onFocus(event: FocusEvent<any>){
    console.log(event)
  }

  render(){
    return <a className={styles.BtnOrders} data-testid="BtnOrders" onFocus={this.onFocus}>
      <ListIcon type="secondary"/>
      Лента заказов
    </a>
  }
};

export default BtnOrders;
