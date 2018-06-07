import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';

const { width, height } = Dimensions.get('window');


export default class OrderRow extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.orderRow} onPress={() => this.props.navigation.navigate('Order')}>
          <View style={styles.smallColumn}><Text style={styles.rowText}>Id</Text></View>
          <View style={styles.bigColumn}><Text style={styles.rowText}>{this.props.order.adress}</Text></View>
          <View style={styles.smallColumn}><Text style={styles.rowText}></Text></View>
          <View style={styles.bigColumn}><Text style={styles.rowText}>{this.props.order.status}</Text></View>
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
  },
    headerRowText: {
        fontSize: 12,
    }
});
