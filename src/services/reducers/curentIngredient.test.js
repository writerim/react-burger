import { SET_CURENT_INGREDIENT } from "../actions/curentIngredient";
import { curentIngredientReducer, defaultIngredient } from "./curentIngredient";


let testCurent = {
  _id: "100",
  name: "test",
  type: "q",
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: "",
  image_mobile: "",
  image_large: "",
  __v: 0
}

describe('curentIngredientReducer', () => {
  it('should handle SET_CURENT_INGREDIENT', () => {
    expect(
      curentIngredientReducer(defaultIngredient, {
        type: SET_CURENT_INGREDIENT,
        playground : [testCurent]
      })
    ).toEqual([testCurent])
  })
}) 
