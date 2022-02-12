// Компонент омдального окна
import { useCallback, useEffect } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface ModalInterface {
  title?: string; // Название модального окна в шапке
  children?: JSX.Element | JSX.Element[]; // Что будет в теле модального окна
  setShow: Function // Коллебек для передачи видимости инициатору
}


const modalRoot = document.getElementById('modal-root');

// Принимает в себя название, тело
const Modal = ({ title, children, setShow }: ModalInterface) => {

  const onCloseModal = () => {
    setShow(false)
  }


  useEffect(() => {
    const listenerKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShow(false)
      }
    }
    window.addEventListener('keyup', listenerKeyboard);
    return () => {
      window.removeEventListener('keyup', listenerKeyboard)
    }
  }, [])

  return modalRoot ? createPortal(
    <>
      <ModalOverlay setShow={setShow} />
      <div className={styles.ModalContent}>
        <div className={styles.Header}>
          {title &&
            <p className="text text_type_main-medium">{title}</p>
          }
          <div className={styles.CloseButton} onClick={onCloseModal}>
            <CloseIcon type="primary" />
          </div>
        </div>
        {children}
      </div>
    </>
    , modalRoot) : <></>

};


export default Modal;
