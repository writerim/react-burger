import { URL_GET_LIST_INGRIDIENTS } from './consts';
import { Dispatch } from 'react';
import { GET_INGRIDIENTS, GET_INGRIDIENTS_FAILED, GET_INGRIDIENTS_ERROR, SET_INGRIDIENTS } from './actions/ingredients';
import { IngredientInterface } from '../interfaces/inredientInterface';
import { checkResponse } from '../utils/api';


type Action =
    | { type: string }
    | { type: string, playground: IngredientInterface[] };

export const getIngredientsData = () => {
    return async function (dispath: Dispatch<Action>) {
        dispath({
            type: GET_INGRIDIENTS
        })
        await fetch(URL_GET_LIST_INGRIDIENTS)
            .then(checkResponse)
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