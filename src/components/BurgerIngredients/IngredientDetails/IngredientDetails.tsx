import React, { FC } from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import Modal from '../../Modal/Modal';
import styles from './IngredientDetails.module.css';

// Еще модальное окно. Ммм фигма Ui
const ModalItem = (props: IngridientInterface) => (
    <Modal title='Детали ингридиента'>
      <img src={props.image} className={styles.Img} />
      <p className="text text_type_main-medium">{props.name}</p>
      <div className={`row ${styles.Title}`}>
        <div className='col'>
          <p className="text text_type_main-default">Калории,ккал</p>
          {props.calories}
        </div>
        <div className='col'>
          <p className="text text_type_main-default">Белки, г</p>
          {props.proteins}
        </div>
        <div className='col'>
          <p className="text text_type_main-default">Жиры, г</p>
          {props.fat}
        </div>
        <div className='col'>
          <p className="text text_type_main-default">Углеводы, г</p>
          {props.carbohydrates}
        </div>
      </div>
    </Modal>
);

export default ModalItem;
