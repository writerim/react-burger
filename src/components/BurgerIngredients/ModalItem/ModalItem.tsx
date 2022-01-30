import React, { FC } from 'react';
import { IngridientInterface } from '../../../interfaces/inridient_interface';
import styles from './ModalItem.module.css';


const styleModal = {
  display: 'block'
}

const styleModalClose = {
  color: '#fff'
}

// Еще модальное окно. Ммм фигма Ui
const ModalItem = (props: IngridientInterface) => (
  <>
    <div className="modal fade show" style={styleModal}>
      <div className={ `modal-dialog ${styles.modalDialog}` }>
        <div className={`modal-content ${styles.modalContent}`}>
          <div className={`modal-header ${styles.modalHeader}`}>
            <h5 className="modal-title">Детали ингридиента</h5>
            <button type="button"
              className="btn-close"
              style={styleModalClose}
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img src={props.image} className={styles.Img} />
            <p className="text text_type_main-medium">{props.name}</p>
            <div className={ `row ${styles.Title}` }>
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
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
  </>
);

export default ModalItem;
