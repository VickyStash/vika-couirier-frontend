import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');


export default class OrderRow extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.orderRow} onPress={() => this.props.navigation.navigate('Order')}>
        <View style={styles.smallColumn} />
        <View style={styles.bigColumn} />
        <View style={styles.smallColumn} />
        <View style={styles.bigColumn} />
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  orderRow: {
    flexDirection: 'row',
    height: height/10,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
  },
  bigColumn: {
    flex: 3,
    backgroundColor: '#c5a3ff',
    height: height/10
  },
  smallColumn: {
    flex: 2,
    backgroundColor: '#b28dff',
    height: height/10
  }
});
