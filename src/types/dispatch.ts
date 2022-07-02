import { NavigateFunction } from 'react-router-dom';
import { Action } from 'redux';
import { WsActions } from './ws';
import { OrderAction } from './order';
import { CurentIngredientsAction } from './curentIngredients';
import { ActionUser } from './authEtc';
import { ActiveTabAction } from './activeTab';
import { Dispatch } from 'react';
import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import { RootState } from '../services/reducers';
import { IngredientsAction } from './ingredients';
import { SelectedIngredientsAction } from './selectedIngredients';
import { WsActionUserType } from './wsUser';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;


export type AppDispatchActionsType =
    | ActiveTabAction
    | CurentIngredientsAction
    | IngredientsAction
    | OrderAction
    | SelectedIngredientsAction
    | WsActions
    | Function
    | WsActionUserType
    | ActionUser;


export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, any>
>;


export type AppDispatch = Dispatch<AppDispatchActionsType>;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 