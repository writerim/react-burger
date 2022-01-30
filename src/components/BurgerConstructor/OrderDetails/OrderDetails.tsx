import Modal from '../../Modal/Modal';
import styles from './OrderDetails.module.css';

const OrderDetails = () => {
  return (
    <Modal>
      <p className="text text_type_digits-large">034536</p>
      <p className="text text_type_main-medium">
        Идентификатор заказа
      </p>
      <p className="text text_type_main-default">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default">
        Дождитесь готовности на орбитальной станции
      </p>
    </Modal>
  )
};

export default OrderDetails;
