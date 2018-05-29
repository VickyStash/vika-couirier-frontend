import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import Expo from 'expo';
import OrderRow from '../components/orderRow';

const { width, height } = Dimensions.get('window');

export default class Order extends Component {
  static navigationOptions = {
    title: 'Order',
  };
  render() {
    return (
       <OrderRow />
    );
  }
}
