// Интейейс для получения всех ингридиентов
import { IngridientInterface } from './../inridient_interface';
export interface GetListIngridientsInterface {
    success : string;
    data : IngridientInterface[]
}