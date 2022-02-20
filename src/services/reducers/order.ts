import { SET_ORDER_DETAIL } from './../actions/ordet';

type OrderDetailtOuter = {
    success: boolean;
    name: string;
    order: {
        [number: string]: number
    };
}

type Action = {
    type: string
    playground: OrderDetailtOuter
}


const OrderDefault: OrderInterface = {
    number: 0,
    name: ''
}

interface OrderInterface {
    number: number;
    name: string
}

export const orderReducer = (state: OrderInterface = OrderDefault, action: Action) => {
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