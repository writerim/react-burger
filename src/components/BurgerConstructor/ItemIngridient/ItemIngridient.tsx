import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import { DROP_SELECTED_INGREDIENT } from '../../../services/actions/selected_ingredients';
import styles from './ItemIngridient.module.css';

interface ItemProps {
  ingridient: IngredientInterface
  is_locked: boolean
  position: "top" | "bottom" | undefined
  uid: string
  indexIngredient: number
}

const Item = ({ ingridient, is_locked, position, uid, indexIngredient }: ItemProps) => {

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

  const onMoveHandler = (ingredient: IngredientInterface) => {
    console.log(ingredient)
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
  drag(drop(ref))

  return (
    <div className={`col ${is_locked ? styles.ItemColMain : styles.ItemCol}`} ref={ref}

    >
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
