import { IngredientsSorted } from './reducers/selectedIngredients';
import { URL_TO_SUMMARY } from './consts';
import { GET_ORDER_DETAIL, SET_ORDER_DETAIL, GET_ORDER_ERROR } from './actions/ordet';
import { checkResponse } from '../utils/api';
import { AppDispatch } from '../types/dispatch';
import { getCookie } from '../utils/cookie';



export const getIngredientsData = (ingredients: IngredientsSorted[]) => {

    const getIds = (ingredients: IngredientsSorted[]): string[] => {
        let ids: string[] = []
        ingredients.forEach(ingridient => {
            ids.push(ingridient.element._id)
        })
        return ids
    }

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: GET_ORDER_DETAIL
        })
        await fetch(URL_TO_SUMMARY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`
                // Authorization: 'Bearer ' + getCookie('token')
            },
            body: JSON.stringify({
                ingredients: getIds(ingredients)
            })
        }).then(checkResponse)
            .then(req => {
                if (req.success) {
                    dispatch({ type: SET_ORDER_DETAIL, playground: req })
                }
            })
            .catch(e => {
                dispatch({
                    type: GET_ORDER_ERROR,
                    playground: e
                })
            })
    }
};