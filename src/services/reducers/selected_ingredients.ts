import { GET_SELECTED_INGREDIENTS, ADD_SELECTED_INGREDIENT, DROP_SELECTED_INGREDIENT, SET_SORT_INDEX_ELEMENT } from './../actions/selected_ingredients';
import { IngredientInterface } from './../../interfaces/inredient_interface';
export interface IngredientsSorted {
    // Сам элемент
    element: IngredientInterface;
    // Уникальный идентификатор
    uuid: string;
    // Индекс в сортировке
    index: number;
}

const defaultIngredients: IngredientsSorted[] = []

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

type Action = {
    type: string
    playground: IngredientsSorted
    uuid: string
    index: number
}


export const selectedIngredientsReducer = (state = defaultIngredients, action: Action) => {
    switch (action.type) {
        case DROP_SELECTED_INGREDIENT:
            let removeIndex = -1
            state.forEach((ingredientSorted, index) => {
                if (ingredientSorted.uuid === action.uuid) {
                    removeIndex = index
                }
            })
            return state.filter((elem, index) => index !== removeIndex)
        case SET_SORT_INDEX_ELEMENT:
            // Высчитываем направление
            let moveElem = state.find(elem => elem.uuid === action.uuid)
            if (!moveElem) {
                return state
            }

            let moveTop = true
            if (moveElem?.index < action.index) {
                moveTop = false
            }

            moveElem.index = action.index
            return state.reduce((res: IngredientsSorted[], elem) => {
                if (elem.uuid !== action.uuid) {
                    if (moveTop && action.index <= elem.index) {
                        elem.index += 1
                    } else if (!moveTop && action.index >= elem.index) {
                        elem.index -= 1
                    }
                } else {
                    elem.index = action.index
                }
                res.push(elem)
                return res
            }, state)
        case ADD_SELECTED_INGREDIENT:
            // Если пришла булка то надо удалить предыдущую
            let removeBunIndex = -1
            if (action.playground.element.type === 'bun') {
                state.forEach((ingredient, index) => {
                    if (ingredient.element.type === 'bun') {
                        removeBunIndex = index
                    }
                })
            }
            return [...state.filter((_, index) => removeBunIndex !== index), action.playground]
        case GET_SELECTED_INGREDIENTS:
            return state.sort((a, b) => {
                if (a.index > b.index) {
                    return 1
                } else if (a.index < b.index) {
                    return -1
                }
                return 0
            })
        default:
            return state
    }
}