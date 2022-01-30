import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import styles from './ItemIngridient.module.css';

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

//class Item extends React.Component<ItemProps> {
const Item = (props: ItemProps) => {

  const style = {
    maxWidth :48,
    verticalAlign:'middle',
    paddintTop: 30
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={`col ${styles.ItemCol}`}>
      <div className='row'>
        <div className='col' style={style}>
          <span className={styles.Icon}>
            <DragIcon type="primary" />
          </span>
        </div>
        <div className='col'>
          <span className={styles.Element}>
            <ConstructorElement
              type={props.position}
              isLocked={true}
              text={props.item.name}
              price={props.item.price}
              thumbnail={props.item.image}
            />
          </span>
        </div>
      </div>
    </div>
  )
};

export default Item
