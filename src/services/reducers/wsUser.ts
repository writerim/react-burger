import { InitialSocketStateType } from "../../types/wsData";
import { WsActionUserType } from "../../types/wsUser";
import { WS_CONNECTION_CLOSED_USER, WS_CONNECTION_ERROR_USER, WS_CONNECTION_SUCCESS_USER, WS_GET_MESSAGE_USER } from "../actions/wsUser";

  
export const iInitialSocketState = {
    wsConnected: false,
    data: { orders: [], total: 0, totalToday: 0 },
  };
  
  export const wsUserReducer = (state:InitialSocketStateType = iInitialSocketState, action : WsActionUserType) :InitialSocketStateType => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS_USER:
        return {
          ...state,
          wsConnected: true,
          error: undefined,
        };
      case WS_CONNECTION_ERROR_USER:
        return {
          ...state,
          error: action.payload,
          wsConnected: false,
        };
      case WS_CONNECTION_CLOSED_USER:
        return {
          ...state,
          error: undefined,
          wsConnected: false,
        };
      case WS_GET_MESSAGE_USER:
        return {
          ...state,
          error: undefined,
          data: {
            ...state.data,
            orders: action.payload.orders,
            total: action.payload.total,
            totalToday: action.payload.totalToday,
          },
        };
      default:
        return state;
    }
  };