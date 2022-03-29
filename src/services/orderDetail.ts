import { IngredientsSorted } from './reducers/selectedIngredients';
import { URL_TO_SUMMARY } from './consts';
import { GET_ORDER_DETAIL, SET_ORDER_DETAIL, GET_ORDER_ERROR } from './actions/ordet';
import { Dispatch } from 'react';
import { IngredientInterface } from '../interfaces/inredientInterface';


type Action =
    | { type: string }
    | { type: string, playground: IngredientInterface[] }
    | { type: string, playground: Error };

export const getIngredientsData = (ingredients: IngredientsSorted[]) => {

    const getIds = (ingredients: IngredientsSorted[]): string[] => {
        let ids: string[] = []
        ingredients.forEach(ingridient => {
            ids.push(ingridient.element._id)
        })
        return ids
    }

    return async function (dispatch: Dispatch<Action>) {
        dispatch({
            type: GET_ORDER_DETAIL
        })
        await fetch(URL_TO_SUMMARY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients: getIds(ingredients)
            })
        }).then(r => r.json())
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