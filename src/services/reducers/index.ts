import { activeTab } from './active_tab';
import { combineReducers } from 'redux'

import { ingredientsReducer } from './ingredients'
import { selectedIngredientsReducer } from './selected_ingredients'
import { curentIngredientReducer } from './curent_ingredient'
import { orderReducer } from './order'


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    selectedIngredients: selectedIngredientsReducer,
    curentIngredient: curentIngredientReducer,
    order: orderReducer,
    activeTab: activeTab
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
