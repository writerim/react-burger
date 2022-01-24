import { render } from '@testing-library/react';
import React, { FC } from 'react';
import data from '../../../utils/data_selected';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

interface Ingridient {
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  _id: string;
  __v: number;
}

interface ItemListProps {
  items: Ingridient[]
}

class ItemList extends React.Component<ItemListProps>{
  constructor(props: ItemListProps) {
    super(props)
    this.getPosition = this.getPosition.bind(this)
    this.getModifyTitle = this.getModifyTitle.bind(this)
  }

  // Получение позиции оносительно списка
  getPosition(id: string): "top" | "bottom" | undefined {
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
  getModifyTitle(item_ingridient: Ingridient) :Ingridient {
    let pos = 0;
    let clone_ingridient = Object.assign({}, item_ingridient)
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element._id === item_ingridient._id) {
        if (index === 0) {
          clone_ingridient.name += ' (верх)'
        } else if (index === data.length - 1) {
          clone_ingridient.name += ' (низ)'
        }
      }
    }
    return clone_ingridient
  }

  render() {
    return (
      <div className={`row ${styles.Row}`}>
        {this.props.items.map(item => (
          <Item item={this.getModifyTitle(item)} key={item._id} position={this.getPosition(item._id)} />
        ))}
      </div>
    )
  }
};

export default ItemList;
