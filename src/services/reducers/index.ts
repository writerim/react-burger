import { activeTab } from './activeTab';
import { combineReducers } from 'redux'

import { ingredientsReducer } from './ingredients'
import { selectedIngredientsReducer } from './selectedIngredients'
import { orderReducer } from './order'
import { curentIngredientReducer } from './curentIngredient';
import { authReducer } from './authEtc';
import { wsReducer } from './ws';
import { wsUserReducer } from './wsUser';



const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    selectedIngredients: selectedIngredientsReducer,
    curentIngredient: curentIngredientReducer,
    order: orderReducer,
    activeTab: activeTab,
    auth : authReducer,
    ws: wsReducer,
    wsUser: wsUserReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
