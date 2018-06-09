import {combineReducers} from 'redux';
import Order from './order';

const reducers = combineReducers({
    order: Order,
});

export default reducers;
