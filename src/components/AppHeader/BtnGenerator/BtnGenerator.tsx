import styles from './BtnGenerator.module.css';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import stylesAppHeader from './../AppHeader.module.css';
import { Link } from 'react-router-dom';



interface BtnGeneratorProps { }

const BtnGenerator = () => (
  <Link to='/' className={`${styles.BtnGenerator} ${stylesAppHeader.Btn}
  text text_type_main-default` }
    data-testid="BtnGenerator">
    <BurgerIcon type="primary" />
    <span className={stylesAppHeader.BtnTitle}>Конструктор</span>
  </Link>
);

export default BtnGenerator;
