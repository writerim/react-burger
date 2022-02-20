import { SET_INGRIDIENTS } from './../actions/ingredients';
import { IngredientInterface } from "../../interfaces/inredient_interface"

const defaultIngredients: IngredientInterface[] = []

type Action = {
    type: string
    playground: IngredientInterface[]
}

export const ingredientsReducer = (state: IngredientInterface[] = defaultIngredients, action: Action) => {
    switch (action.type) {
        case SET_INGRIDIENTS:
            return action.playground
        default:
            return state
    }
}