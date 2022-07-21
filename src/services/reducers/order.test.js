import { SET_ORDER_DETAIL } from '../actions/ordet';
import { OrderDefault, orderReducer } from './order'

describe('orderReducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(OrderDefault, {})).toEqual(
      OrderDefault
    )
  })

  it('should handle SET_ORDER_DETAIL', () => {
    expect(
      orderReducer(OrderDefault, {
        type: SET_ORDER_DETAIL,
        playground : {
          order : {number : 200011},
          name : "test"
        }
      })
    ).toEqual({
      name : "test",
      number : 200011
    })
  })

}) 