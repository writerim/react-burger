import { IngridientInterface } from '../../../interfaces/inridient_interface';
import { IngridientPropType } from '../../../types/ingridient';
import data from '../../../utils/data_selected';
import Item from '../ItemIngridient/ItemIngridient';
import styles from './ItemListIngridients.module.css'

interface ItemListProps {
  items: IngridientInterface[]
}

const ItemList = (props: ItemListProps) => {
  // Получение позиции оносительно списка
  const getPosition = (id: string): "top" | "bottom" | undefined => {
    let pos = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element._id === id) {
        if (index === 0) {
          return 'top'
        } else if (index === data.length - 1) {
          return 'bottom'
        }
        return undefined
      }
    }
  }

  // Модификация названия первого и последнего элемента
  // Верхний должен содержать Верх
  // Нижний - низ
  const getModifyTitle = (itemIngridient: IngridientInterface) :IngridientInterface =>  {
    let clone_ingridient = Object.assign({}, itemIngridient)
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element._id === itemIngridient._id) {
        if (index === 0) {
          clone_ingridient.name += ' (верх)'
        } else if (index === data.length - 1) {
          clone_ingridient.name += ' (низ)'
        }
      }
    }
    return clone_ingridient
  }

  return (
    <div className={`row ${styles.Row}`}>
      {props.items.map(item => (
        <Item item={getModifyTitle(item)} key={item._id} position={getPosition(item._id)} />
      ))}
    </div>
  )
};

ItemList.propTypes = IngridientPropType

export default ItemList;
