import { RootState } from './../services/reducers/index';
import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux';


export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
