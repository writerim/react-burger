import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import { IngridientPropType } from '../../../types/ingridient';
import styles from './ItemIngridient.module.css';
import PropTypes from 'prop-types';

interface ItemProps {
  item: IngridientInterface
  position: "top" | "bottom" | undefined
}

const Item = (props: ItemProps) => {

  const isLocked = (): boolean => {
    if (props.position) {
      return false
    }
    return true
  }

  return (
    <div className={`col ${styles.ItemCol}`}>
      <div className={styles.Pointers}>
        <DragIcon type="primary" />
      </div>
      <div className={styles.IngridientSummary}>
        <span className={styles.Element}>
          <ConstructorElement
            type={props.position}
            isLocked={isLocked()}
            text={props.item.name}
            price={props.item.price}
            thumbnail={props.item.image}
          />
        </span>
      </div>
    </div>
  )
};


export default Item
