import { GET_SELECTED_INGREDIENTS, ADD_SELECTED_INGREDIENT, DROP_SELECTED_INGREDIENT } from './../actions/selected_ingredients';
import { IngredientInterface } from './../../interfaces/inredient_interface';

const defaultIngredients: IngredientInterface[] = []

type Action = {
    type: string
    playground: IngredientInterface
    uid: string
}


export const selectedIngredientsReducer = (state = defaultIngredients, action: Action) => {
    switch (action.type) {
        case DROP_SELECTED_INGREDIENT:
            let removeIndex = -1
            let removeId = ''
            let infredients = state.filter(ingridient => ingridient.type !== 'bun')
            infredients.forEach((ingridient, index) => {
                let uid = `${ingridient._id}${index}`
                if (uid == action.uid) {
                    removeIndex = index
                    removeId = ingridient._id
                }
            })
            let curentIndexIngredient = 0
            let isDrop = false
            return [...state.filter(ingredient => {
                if (isDrop) {
                    return ingredient
                }
                if (ingredient._id == removeId) {
                    if (curentIndexIngredient != removeIndex) {
                        curentIndexIngredient++
                        return ingredient
                    } else {
                        isDrop = true
                    }
                } else {
                    return ingredient
                }
            })]
        case ADD_SELECTED_INGREDIENT:
            // Если пришла булка то надо удалить предыдущую
            let removeBunIndex = -1
            if (action.playground.type == 'bun') {
                state.forEach((ingredient, index) => {
                    if (ingredient.type == 'bun') {
                        removeBunIndex = index
                    }
                })
            }
            return [...state.filter((_, index) => removeBunIndex !== index), action.playground]
        case GET_SELECTED_INGREDIENTS:
            return state
        default:
            return state
    }
}