import { useState } from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import Modal from '../../Modal/Modal';
import styles from './ModalIngridientDetail.module.css';

interface ModalIngridientDetailInterface {
  ingridient: IngridientInterface,
  setIsShowDetail: Function
}

// Еще модальное окно. Ммм фигма Ui
const ModalIngridientDetail = (props: ModalIngridientDetailInterface) => {

  return (
    <Modal title='Детали ингридиента' setShow={props.setIsShowDetail}>
      <img src={props.ingridient.image} className={styles.Img} />
      <p className="text text_type_main-medium">{props.ingridient.name}</p>
      <div className={`row ${styles.Title}`}>
        <div className='col'>
          <p className="text text_type_main-default">Калории,ккал</p>
          {props.ingridient.calories}
        </div>
        <div className='col'>
          <p className="text text_type_main-default">Белки, г</p>
          {props.ingridient.proteins}
        </div>
        <div className='col'>
          <p className="text text_type_main-default">Жиры, г</p>
          {props.ingridient.fat}
        </div>
        <div className='col'>
          <p className="text text_type_main-default">Углеводы, г</p>
          {props.ingridient.carbohydrates}
        </div>
      </div>
    </Modal>
  )
};

export default ModalIngridientDetail;
