// Компонент для отображения бэкграйнда модалки
import { MouseEventHandler } from 'react';
import styles from './ModalOverlay.module.css';

interface ModalOverlayPropsInterface {
  children?: JSX.Element | JSX.Element[];
  setShow: Function
}

const ModalOverlay = ({ children, setShow }: ModalOverlayPropsInterface) => {

  const closeModal = () => {
    console.log('click overlay')
    setShow(false)
  }

  console.log('render overlay')

  return (
    <div className={styles.Background} onClick={closeModal}>
      {/* Тут отображаем содержимое модального окна */}
      {children}
    </div>
  )
};

export default ModalOverlay;
