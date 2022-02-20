import { IngredientInterface } from './../interfaces/inredient_interface';
import { Dispatch } from 'react';
import { GET_INGRIDIENTS, GET_INGRIDIENTS_FAILED, GET_INGRIDIENTS_ERROR, SET_INGRIDIENTS } from './actions/ingredients';

const URL_GET_LIST_INGRIDIENTS = 'https://norma.nomoreparties.space/api/ingredients';

type Action =
    | { type: string }
    | { type: string, playground: IngredientInterface[] };

export const getIngredientsData = () => {
    return async function (dispath: Dispatch<Action>) {
        dispath({
            type: GET_INGRIDIENTS
        })
        await fetch(URL_GET_LIST_INGRIDIENTS)
            .then(r => r.json())
            .then(req => {
                if (req.success) {
                    dispath({
                        type: SET_INGRIDIENTS,
                        playground: req.data
                    })
                } else {
                    dispath({
                        type: GET_INGRIDIENTS_FAILED
                    })
                }
            })
            .catch(e => {
                dispath({
                    type: GET_INGRIDIENTS_ERROR,
                    playground: e
                })
            })
    }

};