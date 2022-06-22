// Компонент для отображения бэкграйнда модалки
import { MouseEventHandler } from 'react';
import styles from './ModalOverlay.module.css';

interface ModalOverlayPropsInterface {
  children?: JSX.Element | JSX.Element[];
  setShow: Function
}

const ModalOverlay = ({ setShow }: ModalOverlayPropsInterface) => {

  const closeModal = () => {
    if( typeof setShow === 'function' ){
      setShow(false)
    }else{

    }
  }

  return (
    <div className={styles.Background} onClick={closeModal}>
    </div>
  )
};

export default ModalOverlay;
