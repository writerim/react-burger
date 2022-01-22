import { render } from '@testing-library/react';
import React, { FC } from 'react';
import data from '../../utils/data_selected';
import  Item from '../Item/Item';
import styles from './ItemList.module.css'

interface ItemListProps {
  items : {
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
  }[]
}

class ItemList extends React.Component<ItemListProps>{
  constructor(props: ItemListProps){
    super(props)
    this.getPosition = this.getPosition.bind(this)
  }

  // Получение позиции оносительно списка
  getPosition(id: string): "top" | "bottom" | undefined{
    let pos = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if(element._id === id) {
        if( index === 0 ){
          return 'top'
        }else if( index === data.length - 1 ){
          return 'bottom'
        }
        return undefined
      }
    }
    
  }
  
  render(){
    return (
      <div className={`row ${styles.Row}`}>
        {this.props.items.map(item => (
          <Item item={item} key={item._id} position={this.getPosition(item._id)}/>
        ))}e
      </div>
    )
  }
};

export default ItemList;
