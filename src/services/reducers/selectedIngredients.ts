import { GET_SELECTED_INGREDIENTS, ADD_SELECTED_INGREDIENT, DROP_SELECTED_INGREDIENT, SET_SORT_INDEX_ELEMENT } from '../actions/selectedIngredients';
import { IngredientInterface } from '../../interfaces/inredientInterface';
import { SelectedIngredientsAction } from '../../types/selectedIngredients';
export interface IngredientsSorted {
    // Сам элемент
    element: IngredientInterface;
    // Уникальный идентификатор
    uuid: string;
    // Индекс в сортировке
    index: number;
    ref? : HTMLDivElement
}

export const defaultIngredients: IngredientsSorted[] = []

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


export const selectedIngredientsReducer = (state = defaultIngredients, action: SelectedIngredientsAction) : IngredientsSorted[]  => {
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
            let newStage = [...state]
            let moveElem = newStage.find(elem => elem.uuid === action.uuid)
            let toElem = newStage.find(elem => elem.index === action.index)
            if (!moveElem) {
                return newStage
            }
            if (!toElem) {
                return newStage
            }
            let indexTo = toElem.index
            let index = moveElem.index
            newStage.splice(indexTo, 1, moveElem)
            newStage.splice(index, 1, toElem)
            toElem.index = index
            moveElem.index = indexTo
            return newStage
        case ADD_SELECTED_INGREDIENT:
            // Если пришла булка то надо удалить предыдущую
            let removeBunIndex = -1
            if(action.playground){
                if (action.playground.element.type === 'bun') {
                    state.forEach((ingredient, index) => {
                        if (ingredient.element.type === 'bun') {
                            removeBunIndex = index
                        }
                    })
                }
                return [...state.filter((_, index) => removeBunIndex !== index), action.playground]
            }
            return []
        case GET_SELECTED_INGREDIENTS:
            return state
        default:
            return state
    }
}