import { ORDERS_RESPONSE, API_URL } from "../constants/action-types"

export const getOrders = (result) => {
    return {
        type: ORDERS_RESPONSE,
        result,
    }
}

function fetchOrders() {
    return fetch(API_URL+'/orders', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    });
}

export const ordersRequest = () => {
    return function (dispatch) {
        return fetchOrders()
            .then(orders => orders.json())
            .then(orders => {
                dispatch(getOrders(orders));
            }).catch((error)=>{
                console.log(error);
            })
    }
}