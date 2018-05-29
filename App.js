import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './app/screens/main';
import Order from './app/screens/order';

export const NavigationApp = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main', 
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      },
    },
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: 'Order',
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      },
    },
  }
});

export default class App extends React.Component {
  render() {
    return <NavigationApp />
  }
}
