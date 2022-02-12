// Интефейс одного ингридиента
export interface IngridientInterface {
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    _id: string;
    __v: number;
}