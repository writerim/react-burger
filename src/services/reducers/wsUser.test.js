import { iInitialSocketState, wsUserReducer } from "./wsUser";
import { WS_CONNECTION_CLOSED_USER, WS_CONNECTION_ERROR_USER, WS_CONNECTION_SUCCESS_USER, WS_GET_MESSAGE_USER } from "../actions/wsUser";

describe('curentIngredient', () => {
  it('should return the initial state', () => {
    expect(wsUserReducer(undefined, {})).toEqual(
      iInitialSocketState
    )
  })

  it('should handle WS_CONNECTION_SUCCESS_USER', () => {
    expect(
      wsUserReducer(iInitialSocketState, {
        type: WS_CONNECTION_SUCCESS_USER
      })
    ).toEqual(
      {
        ...iInitialSocketState,
        wsConnected: true,
        error: undefined
      }
    )
  })

  it('should handle WS_CONNECTION_ERROR_USER', () => {
    expect(
      wsUserReducer(iInitialSocketState, {
        type: WS_CONNECTION_ERROR_USER,
        payload: 'Error'
      })
    ).toEqual(
      {
        ...iInitialSocketState,
        wsConnected: false,
        error: 'Error'
      }
    )
  })

  it('should handle WS_CONNECTION_CLOSED_USER', () => {
    expect(
      wsUserReducer(iInitialSocketState, {
        type: WS_CONNECTION_CLOSED_USER
      })
    ).toEqual(
      {
        ...iInitialSocketState,
        error: undefined,
        wsConnected: false,
      }
    )
  })

  it('should handle WS_GET_MESSAGE_USER', () => {
    expect(
      wsUserReducer(iInitialSocketState, {
        type: WS_GET_MESSAGE_USER,
        payload: {
          orders: {},
          total: 1234,
          totalToday: 30
        }
      })
    ).toEqual(
      {
        ...iInitialSocketState,
        error: undefined,
        data: {
          orders: {},
          total: 1234,
          totalToday: 30
        },
      }
    )
  })

}) 