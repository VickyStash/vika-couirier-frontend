import {
    ORDERS_RESPONSE
} from "../constants/action-types"

const initialState = {
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_RESPONSE:
            return {
                ...state,
                ...action.result,
            };
        default:
            return state;
    }
}
