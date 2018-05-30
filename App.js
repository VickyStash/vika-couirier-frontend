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
    return <NavigationApp />
  }
}
