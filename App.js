import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStackNavigator } from 'react-navigation';
import Main from './app/screens/main';
import Order from './app/screens/order';
import reducers from './app/reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware,
      ),
  );
  return createStore(reducers, initialState, enhancer)
}

const store = configureStore({});

export const NavigationApp = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main', 
      headerStyle: {
          height : 25,
          marginTop: Expo.Constants.statusBarHeight,
      },
    },
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: 'Order',
      headerStyle: {
          height : 25,
          marginTop: Expo.Constants.statusBarHeight,
      },
    },
  }
});

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <NavigationApp />
        </Provider>
    )
  }
}
