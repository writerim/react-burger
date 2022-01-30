import { useState } from 'react';
import { ModalInterface } from '../../interfaces/modal_interface';
import styles from './Modal.module.css';

const styleModal = {
  display: 'block'
}

const styleModalClose = {
  color: '#fff'
}

const Modal = ({ title, children }: ModalInterface) => {

  const [isShowModal, setIsShowModal] = useState(true)

  const hideModal = () =>{
    setIsShowModal(false)
  }

  const getClassModal = () =>{
    let modalClassName = 'modal fade'
    if( isShowModal ){
      modalClassName += ' show'
    }
    return modalClassName
  }

  const getStyleModal = () =>{
    if( isShowModal ){
      return {display: 'block'}
    }
    return {display: 'none'}
  }

  return (
    <>
    <div className={getClassModal()} style={getStyleModal()}>
      <div className={`modal-dialog ${styles.modalDialog}`}>
        <div className={`modal-content ${styles.modalContent}`}>
            <div className={`modal-header ${styles.modalHeader}`}>
              {title && 
                <h5 className="modal-title">{title}</h5>
              }
              <button type="button"
                className="btn-close"
                style={styleModalClose}
                onClick={hideModal}
                ></button>
            </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
    {isShowModal && <div className="modal-backdrop fade show"></div>}
    </>
  )
};

export default Modal;
