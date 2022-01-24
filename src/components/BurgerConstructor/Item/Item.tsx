import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './Item.module.css';

interface ItemI {
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

interface ItemProps {
  item: ItemI
  position: "top" | "bottom" | undefined
}

class Item extends React.Component<ItemProps> {
  constructor(props: ItemProps) {
    super(props)
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={`col ${styles.ItemCol}`}>
          <ConstructorElement
            type={this.props.position}
            isLocked={true}
            text={this.props.item.name}
            price={this.props.item.price}
            thumbnail={this.props.item.image}
          />
      </div>
    )
  }
};

export default Item
