import { useEffect } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredientInterface';
import { ADD_SELECTED_INGREDIENT } from '../../../services/actions/selectedIngredients';
import { RootState } from '../../../services/reducers';
import { IngredientsSorted, uuid } from '../../../services/reducers/selectedIngredients';
import ItemIngridient from '../ItemIngridient/ItemIngridient';
import styles from './ItemListIngredients.module.css'

const ItemList = () => {


  // Нужно отрисовать сначала топ элемент
  // Потом все остальные элементы
  // А потом и нижний
  // Все это прибиваем на гвозди

  const dispatch = useDispatch()

  const selectedIngredients = useSelector((store: RootState) => {
    console.log('RERENDER 3', store.selectedIngredients);
    return store.selectedIngredients
  })


  const getTopMainIngridient = (ingredients: IngredientsSorted[]) => {
    let ingredient = ingredients.find(ingridient => {
      if (ingridient.element.type === 'bun') {
        return ingridient
      }
    })
    return (ingredient && <ItemIngridient ingridient={ingredient} isLocked={true} position="top"
      index={undefined}
    />)
  }

  const getBottomMainIngridient = (ingredients: IngredientsSorted[]) => {
    let ingridient = ingredients.find(ingridient => {
      if (ingridient.element.type === 'bun') {
        return ingridient
      }
    })
    return (ingridient && <ItemIngridient ingridient={ingridient} isLocked={true} position="bottom"
      index={undefined}
    />)
  }

  const getMiddleIngredients = (ingredients: IngredientsSorted[]) => {

    let filteredIngredients = ingredients.filter(ingridient => ingridient.element.type !== 'bun')


    filteredIngredients.sort((a, b) => {
      if (a.index < b.index) {
        return 1
      } else if (a.index > b.index) {
        return -1
      } else {
        return 0
      }
    })

    return (
      filteredIngredients.map((ingridient, index) => (
        <ItemIngridient ingridient={ingridient} key={ingridient.uuid} isLocked={false} position={undefined}
          index={index}
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
    }
  });


  return (
    <div className={styles.IngridientRow} ref={dropTarget}>
      <div>
        {getTopMainIngridient(selectedIngredients)}
      </div>
      <div className={styles.Scroll}>
        {getMiddleIngredients(selectedIngredients)}
      </div>
      <div>
        {getBottomMainIngridient(selectedIngredients)}
      </div>
    </div >
  )
};


export default ItemList;
