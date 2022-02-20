// Интейейс для получения всех ингридиентов
import { IngredientInterface } from '../inredient_interface';
export interface GetListIngridientsInterface {
    success: string;
    data: IngredientInterface[]
}