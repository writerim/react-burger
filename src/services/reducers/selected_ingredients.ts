import { IngredientInterface } from './../../interfaces/inredient_interface';

const defaultIngredients: IngredientInterface[] = []

type Action = {
    type: string
}


export const selectedIngredientsReducer = (state = defaultIngredients, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
}