import { IngredientInterface } from '../../interfaces/inredientInterface';
import { CurentIngredientsAction } from '../../types/curentIngredients';
import { SET_CURENT_INGREDIENT } from '../actions/curentIngredient';

export const defaultIngredient: IngredientInterface = {
    _id: "",
    name: "",
    type: "",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "",
    image_mobile: "",
    image_large: "",
    __v: 0
}



export const curentIngredientReducer = (state = defaultIngredient, action: CurentIngredientsAction) => {
    switch (action.type) {
        case SET_CURENT_INGREDIENT:
            return action.playground
        default:
            return state
    }
}
