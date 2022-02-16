import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback, useEffect, useReducer } from 'react';
import { IngredientInterface } from '../../interfaces/inredient_interface';
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

interface OrderDetailsInterface {
  ingredients: IngredientInterface[];
}


const OrderDetails = ({ ingredients }: OrderDetailsInterface) => {

  const [{ data }, dispatch] = useReducer(reducer, { isLoading: false })

  // поулчаем все id так как хз пока как сделать это прямо в теле
  const getIds = (ingredients: IngredientInterface[]): string[] => {
    let ids: string[] = []
    ingredients.forEach(ingridient => {
      ids.push(ingridient._id)
    })
    return ids
  }

  useEffect(() => {
    fetch(URL_TO_SUMMARY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: getIds(ingredients)
      })
    })
      .then(r => r.json())
      .then(req => {
        if (req.success) {
          dispatch({ type: "success", results: req })
        }
      }).catch(e => {
        dispatch({ type: "failure", error: e })
      })
  }, [ingredients, getIds])

  return (
    <div className={styles.SummaryModal}>
      <p className={`text text_type_digits-large ${styles.TotalPriceModal}`}>
        {data?.order.number}
      </p>
      <p className={`text text_type_main-default ${styles.IdOrderModal}`}>
        Идентификатор заказа
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
