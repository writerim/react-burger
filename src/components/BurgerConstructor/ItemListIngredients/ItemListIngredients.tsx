import { useCallback } from 'react';
import { IngredientInterface } from '../../../interfaces/inredient_interface';
import data from '../../../utils/data_selected';
import ItemIngridient from '../ItemIngridient/ItemIngridient';
import styles from './ItemListIngredients.module.css'

interface ItemListProps {
  items: IngredientInterface[]
}

const ItemList = (props: ItemListProps) => {

  // Нужно отрисовать сначала топ элемент
  // Потом все остальные элементы
  // А потом и нижний
  // Все это прибиваем на гвозди

  const getTopMainIngridient = (ingredients: IngredientInterface[]) => {
    let bottom = null;
    ingredients.map(ingridient => {
      if (ingridient.type == 'bun') {
        bottom = ingridient
        return
      }
    })
    return (bottom && <ItemIngridient ingridient={bottom} is_locked={true} position="top" />)
  }

  const getBottomMainIngridient = (ingredients: IngredientInterface[]) => {
    let bottom = null;
    ingredients.map(ingridient => {
      if (ingridient.type == 'bun') {
        bottom = ingridient
      }
    })
    return (bottom && <ItemIngridient ingridient={bottom} is_locked={true} position="bottom" />)
  }

  const getMiddleIngredients = (ingredients: IngredientInterface[]) => {

    let filtered_ingredients = ingredients.filter(ingridient => ingridient.type !== 'bun')

    return (
      filtered_ingredients.map(ingridient => (
        <ItemIngridient ingridient={ingridient} key={ingridient._id} is_locked={false} position={undefined} />
      ))
    )
  }

  return (
    <div className={styles.IngridientRow}>
      {getTopMainIngridient(props.items)}
      <div className={styles.Scroll}>
        {getMiddleIngredients(props.items)}
      </div>
      {getBottomMainIngridient(props.items)}
    </div>
  )
};


export default ItemList;
