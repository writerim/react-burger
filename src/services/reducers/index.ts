import { activeTab } from './activeTab';
import { combineReducers } from 'redux'

import { ingredientsReducer } from './ingredients'
import { selectedIngredientsReducer } from './selectedIngredients'
import { orderReducer } from './order'
import { curentIngredientReducer } from './curentIngredient';


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    selectedIngredients: selectedIngredientsReducer,
    curentIngredient: curentIngredientReducer,
    order: orderReducer,
    activeTab: activeTab
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
