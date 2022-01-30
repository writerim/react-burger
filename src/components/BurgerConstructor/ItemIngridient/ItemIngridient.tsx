import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import styles from './ItemIngridient.module.css';

interface ItemProps {
  item: IngridientInterface
  position: "top" | "bottom" | undefined
}

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
