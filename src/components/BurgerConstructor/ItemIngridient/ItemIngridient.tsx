import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import { DROP_SELECTED_INGREDIENT } from '../../../services/actions/selected_ingredients';
import styles from './ItemIngridient.module.css';

interface ItemProps {
  ingridient: IngredientInterface
  is_locked: boolean
  position: "top" | "bottom" | undefined
  uid: string
}

const Item = ({ ingridient, is_locked, position, uid }: ItemProps) => {

  let dispatch = useDispatch()

  const getName = useCallback((position) => {
    if (position === 'top') {
      return ingridient.name + ' (верх)'
    } else if (position === 'bottom') {
      return ingridient.name + ' (низ)'
    }
    return ingridient.name
  }, [position])

  const handleClose = () => {
    dispatch({
      type: DROP_SELECTED_INGREDIENT,
      uid: uid
    })
  }

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
            handleClose={handleClose}
          />
        </span>
      </div>
    </div>
  )
};


export default Item
