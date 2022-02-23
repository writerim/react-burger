import { DropTargetMonitor, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import { ADD_SELECTED_INGREDIENT } from '../../../services/actions/selected_ingredients';
import { RootState } from '../../../services/reducers';
import ItemIngridient from '../ItemIngridient/ItemIngridient';
import styles from './ItemListIngredients.module.css'
import { IngredientsSorted, uuid } from '../../../services/reducers/selected_ingredients';
import { randomUUID } from 'crypto';

const ItemList = () => {

  // Нужно отрисовать сначала топ элемент
  // Потом все остальные элементы
  // А потом и нижний
  // Все это прибиваем на гвозди

  const dispatch = useDispatch()

  let selectedIngredients = useSelector((store: RootState) => store.selectedIngredients)

  const getTopMainIngridient = (ingredients: IngredientsSorted[]) => {
    let ingredient = ingredients.find(ingridient => {
      if (ingridient.element.type === 'bun') {
        return ingridient
      }
    })
    return (ingredient && <ItemIngridient ingridient={ingredient} isLocked={true} position="top"
    />)
  }

  const getBottomMainIngridient = (ingredients: IngredientsSorted[]) => {
    let ingridient = ingredients.find(ingridient => {
      if (ingridient.element.type === 'bun') {
        return ingridient
      }
    })
    return (ingridient && <ItemIngridient ingridient={ingridient} isLocked={true} position="bottom"
    />)
  }


  const getMiddleIngredients = (ingredients: IngredientsSorted[]) => {

    let filteredIngredients = ingredients.filter(ingridient => ingridient.element.type !== 'bun')

    return (
      filteredIngredients.map(ingridient => (
        <ItemIngridient ingridient={ingridient} key={ingridient.uuid} isLocked={false} position={undefined} />
      ))
    )
  }

  const onDropHandler = (ingredient: IngredientInterface) => {
    dispatch({
      type: ADD_SELECTED_INGREDIENT,
      playground: {
        element: ingredient,
        index: 0,
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
