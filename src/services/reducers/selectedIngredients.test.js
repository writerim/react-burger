import { ADD_SELECTED_INGREDIENT, DROP_SELECTED_INGREDIENT, GET_SELECTED_INGREDIENTS } from "../actions/selectedIngredients"
import { defaultIngredients, selectedIngredientsReducer } from "./selectedIngredients"

let testIngredient = {
    element: {
        name: "test1",
        type: "bulka",
        proteins: 10,
        fat: 10,
        carbohydrates: 10,
        calories: 10,
        price: 10,
        image: "asasa",
        image_mobile: "//sds",
        image_large: "/hdhfd",
        _id: "idramd",
        __v: 1001
    },
    uuid: "uuuu",
    index: 100
}

describe('selectedIngredientsReducer', () => {
    it('should handle SET_CURENT_INGREDIENT', () => {
        expect(
            selectedIngredientsReducer(defaultIngredients, {
                type: ADD_SELECTED_INGREDIENT,
                playground: testIngredient
            })
        ).toEqual([testIngredient])

    })
})


describe('selectedIngredientsReducer', () => {
    it('should handle GET_SELECTED_INGREDIENTS', () => {
        expect(
            selectedIngredientsReducer([testIngredient], {
                type: GET_SELECTED_INGREDIENTS
            })
        ).toEqual([testIngredient])
    })
}) 


describe('selectedIngredientsReducer', () => {
    it('should handle DROP_SELECTED_INGREDIENT', () => {
        expect(
            selectedIngredientsReducer([testIngredient], {
                type: DROP_SELECTED_INGREDIENT,
                uuid : "uuuu"
            })
        ).toEqual([])
    })
}) 