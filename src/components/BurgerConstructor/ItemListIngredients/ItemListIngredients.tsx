import { UIEvent, useCallback, useEffect } from 'react';
import { DndProvider, DropTargetMonitor, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredientInterface';
import { ADD_SELECTED_INGREDIENT, SET_SORT_INDEX_ELEMENT } from '../../../services/actions/selectedIngredients';
import { RootState } from '../../../services/reducers';
import { IngredientsSorted, uuid } from '../../../services/reducers/selectedIngredients';
import ItemIngridient from '../ItemIngridient/ItemIngridient';
import styles from './ItemListIngredients.module.css'

interface onSortHandlerProps {
  onHandleSortable(item: string, index: number): void
}

let lastChangePosition: number | undefined = undefined

const ItemList = (props: onSortHandlerProps) => {


  // Нужно отрисовать сначала топ элемент
  // Потом все остальные элементы
  // А потом и нижний
  // Все это прибиваем на гвозди

  const dispatch = useDispatch()

  const selectedIngredients = useSelector((store: RootState) => {
    return store.selectedIngredients
  })


  const getTopMainIngridient = (ingredients: IngredientsSorted[]) => {
    let ingredient = ingredients.find(ingridient => {
      if (ingridient.element.type === 'bun') {
        return ingridient
      }
    })
    return (ingredient && <ItemIngridient ingridient={ingredient} isLocked={true} position="top"
      index={undefined} moveListItem={undefined}
    />)
  }

  const getBottomMainIngridient = (ingredients: IngredientsSorted[]) => {
    let ingridient = ingredients.find(ingridient => {
      if (ingridient.element.type === 'bun') {
        return ingridient
      }
    })
    return (ingridient && <ItemIngridient ingridient={ingridient} isLocked={true} position="bottom"
      index={undefined} moveListItem={undefined}
    />)
  }

  const getMiddleIngredients = (ingredients: IngredientsSorted[], moveListItem: Function | undefined) => {

    let filteredIngredients = ingredients.filter(ingridient => ingridient.element.type !== 'bun')


    filteredIngredients.sort((a, b) => {
      if (a.index < b.index) {
        return -1
      } else if (a.index > b.index) {
        return 1
      } else {
        return 0
      }
    })

    return (
      filteredIngredients.map((ingridient, index) => (
        <ItemIngridient ingridient={ingridient} key={ingridient.uuid} isLocked={false} position={undefined}
          index={index} moveListItem={moveListItem}
        />
      ))
    )
  }

  const onDropHandler = (ingredient: IngredientInterface) => {
    dispatch({
      type: ADD_SELECTED_INGREDIENT,
      playground: {
        element: ingredient,
        index: selectedIngredients.length,
        uuid: uuid()
      }
    })
  }

  const [, dropTarget] = useDrop({
    accept: 'ingredients',
    drop: (item: IngredientInterface, monitor: DropTargetMonitor) => {
      onDropHandler(item)
    },
  });

  const moveListItem = useCallback((uuid, moveToIndex) => {
    dispatch({
      type: SET_SORT_INDEX_ELEMENT,
      uuid: uuid,
      index: moveToIndex
    })
  }, [])

  var hoverPosition: XYCoord = {
    x: 0,
    y: 0
  }


  const [, drop] = useDrop({
    accept: 'ingredients_sortable',

    drop : (item: IngredientsSorted) =>{
      lastChangePosition = undefined
    },

    hover(item: IngredientsSorted, monitor) {

      if(typeof lastChangePosition == "undefined"){
        lastChangePosition = item.index
      }

      const clientOffset: XYCoord | null = monitor.getClientOffset()
      if (!clientOffset) {
        return
      }
      const topOffset: XYCoord | null = monitor.getSourceClientOffset()
      if (!topOffset) {
        return
      }

      const moveOffset: XYCoord | null = monitor.getDifferenceFromInitialOffset()
      if (!moveOffset) {
        return
      }
      if (hoverPosition.y === 0) {
        hoverPosition = clientOffset
      }
      const changePosition = Math.floor(moveOffset.y / 88)
      if (changePosition !== 0 && lastChangePosition !== changePosition) {
        if(changePosition > 0){
          props.onHandleSortable(item.uuid, item.index + 1) 
          console.log("DOWN" , item.index + 1)
        }else{
          props.onHandleSortable(item.uuid, item.index - 1) 
          console.log("UP" , item.index - 1)
        }
        lastChangePosition = changePosition
      }
    }

  })



  return (
    <div className={styles.IngridientRow} ref={dropTarget}>
      <div>
        {getTopMainIngridient(selectedIngredients)}
      </div>
      <div className={styles.Scroll} ref={drop}>
        {getMiddleIngredients(selectedIngredients, moveListItem)}
      </div>
      <div>
        {getBottomMainIngridient(selectedIngredients)}
      </div>
    </div >
  )
};


export default ItemList;
