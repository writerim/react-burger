import { NavigateFunction } from 'react-router-dom';
import { Action } from 'redux';
import { WsActions } from './ws';
import { OrderAction } from './order';
import { CurentIngredientsAction } from './curentIngredients';
import { ActionUser } from './authEtc';
import { ActiveTabAction } from './activeTab';
import { Dispatch } from 'react';
import { RootState } from '../services/reducers';
import { IngredientsAction } from './ingredients';
import { SelectedIngredientsAction } from './selectedIngredients';
import { WsActionUserType } from './wsUser';
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useDispatch as dispatchHook} from 'react-redux';




export type AppDispatchActionsType =
    | ActiveTabAction
    | CurentIngredientsAction
    | IngredientsAction
    | OrderAction
    | SelectedIngredientsAction
    | WsActions
    | WsActionUserType
    | ActionUser;


export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, AppDispatchActionsType>
>;


export type AppDispatch = ThunkDispatch<RootState, never, AppDispatchActionsType>
export const useDispatch = () => dispatchHook<AppDispatch>();