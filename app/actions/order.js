import {
    ORDERS_RESPONSE,
    API_URL
} from "../constants/action-types"


export const getOrders = (result) => {
    return {
        type: ORDERS_RESPONSE,
        result
    }
}

function fetchOrders() {
    return fetch('192.168.1.3:5000/orders', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
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
