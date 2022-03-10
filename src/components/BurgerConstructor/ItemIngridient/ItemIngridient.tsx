import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { DROP_SELECTED_INGREDIENT, SET_SORT_INDEX_ELEMENT } from '../../../services/actions/selectedIngredients';
import { IngredientsSorted } from '../../../services/reducers/selectedIngredients';
import styles from './ItemIngridient.module.css';

interface ItemProps {
  ingridient: IngredientsSorted
  isLocked: boolean
  position: "top" | "bottom" | undefined
  index: number | undefined
}

const Item = ({ ingridient, isLocked, position, index }: ItemProps) => {

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

  // Избавляемся от спама паозиций
  let lastIndex: number | undefined = -1


  const [, drop] = useDrop({
    accept: 'ingredients_sortable',
    drop: () => {
      if (!ref.current) {
        return
      }
    },
    hover(item: IngredientsSorted, monitor) {
      if (!ref.current) {
        return
      }

      dispatch({
        type: SET_SORT_INDEX_ELEMENT,
        uuid: item.uuid,
        index: ingridient.index
      })

    }

  })

  const [, drag] = useDrag({
    type: 'ingredients_sortable',
    item: () => {
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
