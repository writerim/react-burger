import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { Interface } from 'readline';
import { IngridientInterface } from '../../interfaces/inridient_interface';
import styles from './OrderDetails.module.css';



const URL_TO_SUMMARY = 'https://norma.nomoreparties.space/api/orders'


type State = {
  data?: HNResponse;
  isLoading: boolean;
  error?: string;
}

type HNResponse = {
  name: string;
  order: {
    [number: string]: number
  };
  error?: string;
}

const initialOrderDetail = {
  name: "",
  order: {
    number: 0
  }
}

type Action =
  | { type: 'request' }
  | { type: 'success', results: HNResponse }
  | { type: 'failure', error: string };


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'request':
      return { isLoading: true };
    case 'success':
      return { isLoading: false, data: action.results };
    case 'failure':
      return { isLoading: false, error: action.error };
  }
}

interface OrderDetails {
  ingridients: IngridientInterface[];
  totalPrice: number
}


const OrderDetails = ({ ingridients, totalPrice }: OrderDetails) => {

  const [{
    data,
    isLoading,
    error
  }, dispatch] = useReducer(reducer, { isLoading: false })

  // поулчаем все id так как хз пока как сделать это прямо в теле
  // завернем ее в useCallback чтобы закешировать
  const getIds = useCallback((ingridients: IngridientInterface[]): string[] => {
    let ids: string[] = []
    ingridients.forEach(ingridient => {
      ids.push(ingridient._id)
    })
    return ids
  }, [ingridients])

  useEffect(() => {
    fetch(URL_TO_SUMMARY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: getIds(ingridients)
      })
    })
      .then(r => r.json())
      .then(data => {
        if (!data.success) {
          console.log(data)
        }
        dispatch({ type: "success", results: data })
      })
  }, [ingridients])

  return (
    <div className={styles.SummaryModal}>
      <p className={`text text_type_digits-large ${styles.TotalPriceModal}`}>
        {totalPrice}
      </p>
      <p className={`text text_type_main-default ${styles.IdOrderModal}`}>
        {data?.order.number}
      </p>
      <p className={`text text_type_main-default ${styles.IconStatusModal}`}>
        <CheckMarkIcon type="primary" />
      </p>
      <p className={`text text_type_main-default ${styles.TextStatusModal}`}>
        Ваш заказ начали оформлять
      </p>
      <p className={`text text_type_main-default text_color_inactive ${styles.DescriptionModal}`}>
        Дождитесь готовоности на орбитальной станции
      </p>
    </div>
  )
};

export default OrderDetails;
