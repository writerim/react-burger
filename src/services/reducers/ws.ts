import { WsActions } from "../../types/ws";
import { InitialSocketStateType } from "../../types/wsData";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../actions/ws";


const InitialSocketState = {
  wsConnected: false,
  data: { orders: [], total: 0, totalToday: 0 },
};

export const wsReducer = (state:InitialSocketStateType = InitialSocketState, action: WsActions): InitialSocketStateType => {
  console.log(action.type)
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      console.log("CONNECT")
      return {
        ...state,
        wsConnected: true,
        error: undefined
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case WS_GET_MESSAGE:
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