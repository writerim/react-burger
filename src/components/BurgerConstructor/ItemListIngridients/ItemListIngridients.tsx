import { useCallback } from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import data from '../../../utils/data_selected';
import ItemIngridient from '../ItemIngridient/ItemIngridient';
import styles from './ItemListIngridients.module.css'

interface ItemListProps {
  items: IngridientInterface[]
}

const ItemList = (props: ItemListProps) => {

  // Нужно отрисовать сначала топ элемент
  // Потом все остальные элементы
  // А потом и нижний
  // Все это прибиваем на гвозди

  const getTopMainIngridient = (ingridients: IngridientInterface[]) => {
    let bottom = null;
    ingridients.map(ingridient => {
      if (ingridient.type == 'bun') {
        bottom = ingridient
        return
      }
    })
    return (bottom && <ItemIngridient ingridient={bottom} is_locked={true} position="top" />)
  }

  const getBottomMainIngridient = (ingridients: IngridientInterface[]) => {
    let bottom = null;
    ingridients.map(ingridient => {
      if (ingridient.type == 'bun') {
        bottom = ingridient
      }
    })
    return (bottom && <ItemIngridient ingridient={bottom} is_locked={true} position="bottom" />)
  }

  const getMiddleIngridients = (ingridients: IngridientInterface[]) => {

    let filtered_ingridients = ingridients.filter(ingridient => ingridient.type !== 'bun')

    return (
      filtered_ingridients.map(ingridient => (
        <ItemIngridient ingridient={ingridient} key={ingridient._id} is_locked={false} position={undefined} />
      ))
    )
  }

  return (
    <div className={styles.IngridientRow}>
      {getTopMainIngridient(props.items)}
      <div className={styles.Scroll}>
        {getMiddleIngridients(props.items)}
      </div>
      {getBottomMainIngridient(props.items)}
    </div>
  )
};


export default ItemList;
