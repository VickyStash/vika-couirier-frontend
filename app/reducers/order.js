import { ORDERS_RESPONSE, ORDERS_UPDATE_RESPONSE, ORDER_RESPONSE, ORDER_DELETE_RESPONSE } from "../constants/action-types"

const initialState = {
    orders: [],
    order: {},
    info: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_RESPONSE:
            return {
                ...state,
                orders: action.result,
            };
        case ORDER_RESPONSE:
            return {
                ...state,
                order: action.result,
            };
        case ORDERS_UPDATE_RESPONSE:
            return {
                ...state,
                order: action.result,
            };
        case ORDER_DELETE_RESPONSE:
            return {
                ...state,
                info: action.result,
            };
        default:
            return state;
    }
}
