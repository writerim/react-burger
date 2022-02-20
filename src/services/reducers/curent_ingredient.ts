import { SET_CURENT_INGREDIENT } from './../actions/curent_ingredient';
import { IngredientInterface } from './../../interfaces/inredient_interface';

const defaultIngredient: IngredientInterface = {
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


type Action = {
    type: string
    playground: IngredientInterface
}

export const curentIngredientReducer = (state = defaultIngredient, action: Action) => {
    switch (action.type) {
        case SET_CURENT_INGREDIENT:
            return action.playground
        default:
            return state
    }
}