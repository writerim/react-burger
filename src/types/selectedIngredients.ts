import { IngredientInterface } from "../interfaces/inredientInterface"
import { IngredientsSorted } from "../services/reducers/selectedIngredients"

export type SelectedIngredientsAction = {
    type: string
    playground?: IngredientsSorted
    uuid?: string
    index?: number
}
