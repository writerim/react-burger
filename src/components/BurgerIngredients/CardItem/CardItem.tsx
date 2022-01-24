import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ModalItem from '../ModalItem/ModalItem';
import styles from './CardItem.module.css';


interface CardItemProps {
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  _id: string;
  __v: number;
}

interface CardItemState {
  isShow?: boolean
}

class CardItem extends React.Component<CardItemProps, CardItemState> {

  constructor(props: CardItemProps) {
    super(props)
    this.state = {
      isShow: false
    }
  }


  openModal(item: CardItemProps) {
    this.setState({ isShow: !this.state.isShow })
  }

  render(): React.ReactNode {

    return (
      <div className={`col ${styles.CardItemCol}`} onClick={this.openModal.bind(this, this.props)}>
        <img src={this.props.image_large} className={styles.CardItemImage} />
        <p className={`${styles.CardItemPriceLine}`}>
          <span className={`text text_type_digits-default ${styles.CardItemPrice}`}>
            {this.props.price}
          </span>
          <CurrencyIcon type="primary" />
        </p>
        <p className={`${styles.CardItemName} text text_type_main-medium`}>{this.props.name}</p>
        {this.state.isShow && <ModalItem {...this.props} />}
      </div>
    )
  }
}

export default CardItem;
