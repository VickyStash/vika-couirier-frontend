import {
    ORDERS_RESPONSE
} from "../constants/action-types"

const initialState = {
    orders: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_RESPONSE:
            return {
                ...state,
                orders: action.result,
            };
        default:
            return state;
    }
}
