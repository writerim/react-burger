import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback } from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import styles from './ItemIngridient.module.css';

interface ItemProps {
  ingridient: IngridientInterface
  is_locked: boolean
  position: "top" | "bottom" | undefined
}

const Item = ({ ingridient, is_locked, position }: ItemProps) => {

  const getName = useCallback((position) => {
    if (position == 'top') {
      return ingridient.name + ' (верх)'
    } else if (position == 'bottom') {
      return ingridient.name + ' (низ)'
    }
    return ingridient.name
  }, [position])

  return (
    <div className={`col ${is_locked ? styles.ItemColMain : styles.ItemCol}`}>
      {!is_locked && <div className={styles.Pointers}>
        <DragIcon type="primary" />
      </div>}
      <div className={styles.IngridientSummary}>
        <span className={styles.Element}>
          <ConstructorElement
            isLocked={is_locked}
            text={getName(position)}
            price={ingridient.price}
            thumbnail={ingridient.image}
          />
        </span>
      </div>
    </div>
  )
};


export default Item
