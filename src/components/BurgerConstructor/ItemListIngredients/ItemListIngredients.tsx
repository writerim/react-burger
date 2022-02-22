import { UIEventHandler, useCallback, useEffect } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import { ADD_SELECTED_INGREDIENT, GET_SELECTED_INGREDIENTS } from '../../../services/actions/selected_ingredients';
import { RootState } from '../../../services/reducers';
import data from '../../../utils/data_selected';
import ItemIngridient from '../ItemIngridient/ItemIngridient';
import styles from './ItemListIngredients.module.css'





const ItemList = () => {

  // Нужно отрисовать сначала топ элемент
  // Потом все остальные элементы
  // А потом и нижний
  // Все это прибиваем на гвозди

  let dispatch = useDispatch()

  let selectedIngredients = useSelector((store: RootState) => store.selectedIngredients)
  console.log(selectedIngredients)

  const getTopMainIngridient = (ingredients: IngredientInterface[]) => {
    let bottom = null;
    ingredients.map(ingridient => {
      if (ingridient.type == 'bun') {
        bottom = ingridient
        return
      }
    })
    return (bottom && <ItemIngridient ingridient={bottom} uid='bottom' is_locked={true} position="top" />)
  }

  const getBottomMainIngridient = (ingredients: IngredientInterface[]) => {
    let bottom = null;
    ingredients.map(ingridient => {
      if (ingridient.type == 'bun') {
        bottom = ingridient
      }
    })
    return (bottom && <ItemIngridient ingridient={bottom} uid='top' is_locked={true} position="bottom" />)
  }

  const getMiddleIngredients = (ingredients: IngredientInterface[]) => {

    let filtered_ingredients = ingredients.filter(ingridient => ingridient.type !== 'bun')

    return (
      filtered_ingredients.map((ingridient, index) => (
        <ItemIngridient ingridient={ingridient} key={`${ingridient._id}${index}`}
          uid={`${ingridient._id}${index}`} is_locked={false} position={undefined} />
      ))
    )
  }

  const onDropHandler = (ingredient: IngredientInterface) => {
    dispatch({
      type: ADD_SELECTED_INGREDIENT,
      playground: ingredient
    })
  }


  const [, dropTarget] = useDrop({
    accept: 'ingredients',
    drop: (item: IngredientInterface, monitor: DropTargetMonitor) => {
      onDropHandler(item)
    },
  });

  return (
    <div className={styles.IngridientRow} ref={dropTarget}>
      <div className={styles.BunTop}>
        {getTopMainIngridient(selectedIngredients)}
      </div>
      <div className={styles.Scroll}>
        {getMiddleIngredients(selectedIngredients)}
      </div>
      <div className={styles.BunBottom}>
        {getBottomMainIngridient(selectedIngredients)}
      </div>
    </div >
  )
};


export default ItemList;
