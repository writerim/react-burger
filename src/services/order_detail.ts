import { GET_ORDER_DETAIL, SET_ORDER_DETAIL, GET_ORDER_ERROR } from './actions/ordet';
import { IngredientInterface } from './../interfaces/inredient_interface';
import { Dispatch } from 'react';

const URL_TO_SUMMARY = 'https://norma.nomoreparties.space/api/orders';

type Action =
    | { type: string }
    | { type: string, playground: IngredientInterface[] }
    | { type: string, playground: Error };

export const getIngredientsData = (ingredients: IngredientInterface[]) => {

    const getIds = (ingredients: IngredientInterface[]): string[] => {
        let ids: string[] = []
        ingredients.forEach(ingridient => {
            ids.push(ingridient._id)
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