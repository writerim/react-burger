import { IngredientInterface } from '../../interfaces/inredientInterface';
import { IngredientsAction } from '../../types/ingredients';
import { SET_INGRIDIENTS } from './../actions/ingredients';

export const defaultIngredients: IngredientInterface[] = []


export const ingredientsReducer = (state: IngredientInterface[] = defaultIngredients, action: IngredientsAction) => {
    switch (action.type) {
        case SET_INGRIDIENTS:
            return action.playground
        default:
            return state
    }
}