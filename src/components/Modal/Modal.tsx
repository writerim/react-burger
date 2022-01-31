// Компонент омдального окна
import { useEffect, useState } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

interface ModalInterface {
  title?: string; // Название модального окна в шапке
  children?: JSX.Element | JSX.Element[]; // Что будет в теле модального окна
  setShow: Function // Коллебек для передачи видимости инициатору
}


const modalRoot = document.getElementById('modal-root');

// Принимает в себя название, тело
const Modal = ({ title, children, setShow }: ModalInterface) => {

  // Выстаялем что при рендере будет всегда снаача
  // И через проброшенный коллбек буем закрувать его
  const [isShow, setIsShow] = useState(true)

  // const onClickOverlay = () => {
  //   setShow(false)
  // }

  useEffect(() => {
    console.log(isShow, 'isShow')
  }, [isShow])

  console.log('render modal')

  return modalRoot ? createPortal(
    <ModalOverlay setShow={setShow} />
    , modalRoot) : <></>

};

export default Modal;
