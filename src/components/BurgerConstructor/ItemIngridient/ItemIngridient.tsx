import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useRef } from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import { DROP_SELECTED_INGREDIENT } from '../../../services/actions/selected_ingredients';
import { IngredientsSorted } from '../../../services/reducers/selected_ingredients';
import styles from './ItemIngridient.module.css';

interface ItemProps {
  ingridient: IngredientsSorted
  isLocked: boolean
  position: "top" | "bottom" | undefined
}

const Item = ({ ingridient, isLocked, position }: ItemProps) => {

  let dispatch = useDispatch()

  const getName = useCallback((position) => {
    if (position === 'top') {
      return ingridient.element.name + ' (верх)'
    } else if (position === 'bottom') {
      return ingridient.element.name + ' (низ)'
    }
    return ingridient.element.name
  }, [position])

  const handleClose = () => {
    dispatch({
      type: DROP_SELECTED_INGREDIENT,
      uuid: ingridient.uuid
    })
  }

  const ref = useRef<HTMLDivElement>(null)


  const [, drop] = useDrop({
    accept: 'ingredients_sortable',
    drop: (ingedient, monitor) => {
      if (!ref.current) {
        return
      }
      const clientOffset = monitor.getClientOffset()
      const distance = Number((clientOffset as XYCoord).y) - Number(ref.current?.getBoundingClientRect().y)
      console.log(ingedient, distance)
    }
  })

  const [, drag] = useDrag({
    type: 'ingredients_sortable',
    item: () => {
      // То что я перемещаю 
      console.log(ingridient)
      return ingridient
    },
  })
  drop(drag(ref))

  return (
    <div className={`col ${isLocked ? styles.ItemColMain : styles.ItemCol}`} ref={ref}>
      {!isLocked && <div className={styles.Pointers}>
        <DragIcon type="primary" />
      </div>}
      <div className={styles.IngridientSummary}>
        <span className={styles.Element}>
          <ConstructorElement
            isLocked={isLocked}
            type={position}
            text={getName(position)}
            price={ingridient.element.price}
            thumbnail={ingridient.element.image}
            handleClose={handleClose}
          />
        </span>
      </div>
    </div>
  )
};


export default Item
