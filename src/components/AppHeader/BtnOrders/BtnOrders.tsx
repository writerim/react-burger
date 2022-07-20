import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BtnOrders.module.css';
import stylesAppHeader from './../AppHeader.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const BtnOrders = () => {
  const location = useLocation()
  return (
    <NavLink to="/feed" 
    state={{background:location}} 
    className={`${styles.BtnOrders} ${stylesAppHeader.Btn} text text_type_main-default`}
      data-testid="BtnOrders">
      <ListIcon type="primary" />
      <span className={stylesAppHeader.BtnTitle}>Лента заказов</span>
    </NavLink>
  )
};

export default BtnOrders;
