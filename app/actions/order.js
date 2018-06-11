import { ORDERS_RESPONSE, ORDERS_UPDATE_RESPONSE, API_URL, ORDER_RESPONSE } from "../constants/action-types"

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

export const getOrder = (result) => {
    return {
        type: ORDER_RESPONSE,
        result,
    }
}

function fetchOrder(id) {
    return fetch(API_URL+'/orders/'+id, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    });
}

export const orderRequest = (id) => {
    return function (dispatch) {
        return fetchOrder(id)
            .then(order => order.json())
            .then(order => {
                dispatch(getOrder(order));
            }).catch((error)=>{
                console.log(error);
            })
    }
}

export const updateOrder = (result) => {
    return {
        type: ORDERS_UPDATE_RESPONSE,
        result,
    }
}

function fetchUpdateOrder(id, adress, delivery_time, status, photo) {
    return fetch(API_URL+'/orders/'+id, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            adress,
            delivery_time,
            status,
            photo,
        }),
    });
}

export const updateOrderRequest = (id, adress, delivery_time, status, photo) => {
    return function (dispatch) {
        return fetchUpdateOrder(id, adress, delivery_time, status, photo)
            .then(order => order.json())
            .then(order => {
                dispatch(updateOrder(order));
            }).catch((error)=>{
                console.log(error);
            })
    }
}