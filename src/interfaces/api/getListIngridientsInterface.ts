import { IngredientInterface } from "../inredientInterface";

// Интейейс для получения всех ингридиентов
export interface GetListIngridientsInterface {
    success: string;
    data: IngredientInterface[]
}