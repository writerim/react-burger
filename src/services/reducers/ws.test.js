import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../actions/ws";
import { wsReducer } from "./ws";

const initialState = {
  wsConnected: false,
  data: { orders: [], total: 0, totalToday: 0 },
};

describe('wsReducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(
      initialState
    )
  })

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_SUCCESS
      })
    ).toEqual(
      {
        ...initialState,
        wsConnected: true,
        error: undefined
      }
    )
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_ERROR,
        payload: 'Error'
      })
    ).toEqual(
      {
        ...initialState,
        wsConnected: false,
        error: 'Error'
      }
    )
  })

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_CLOSED
      })
    ).toEqual(
      {
        ...initialState,
        error: undefined,
        wsConnected: false,
      }
    )
  })

  it('should handle WS_GET_MESSAGE', () => {
    expect(
      wsReducer(initialState, {
        type: WS_GET_MESSAGE,
        payload: {
          orders: {},
          total: 1234,
          totalToday: 30
        }
      })
    ).toEqual(
      {
        ...initialState,
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