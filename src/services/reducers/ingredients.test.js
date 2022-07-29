import { SET_INGRIDIENTS } from "../actions/ingredients"
import { defaultIngredients, ingredientsReducer } from "./ingredients"

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

describe('ingredientsReducer', () => {
  it('should handle SET_CURENT_INGREDIENT', () => {
    expect(
        ingredientsReducer(defaultIngredients, {
        type: SET_INGRIDIENTS,
        playground : testCurent
      })
    ).toEqual(testCurent)
  })
}) 
