import { OrderAction } from '../../types/order';
import { SET_ORDER_DETAIL } from './../actions/ordet';



const OrderDefault: OrderInterface = {
    number: 0,
    name: ''
}

interface OrderInterface {
    number: number;
    name: string
}

export const orderReducer = (state: OrderInterface = OrderDefault, action: OrderAction) => {
    switch (action.type) {
        case SET_ORDER_DETAIL:
            return {
                number: action.playground.order.number,
                name: action.playground.name
            }
        default:
            return state
    }
}