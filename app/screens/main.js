import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import Expo from 'expo';
import { createStackNavigator } from 'react-navigation';
import OrderRow from '../components/orderRow';

const { width, height } = Dimensions.get('window');

export default class Main extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerRow} onPress={() => this.props.navigation.navigate('Order')}>
          <View style={styles.smallColumn}><Text style={styles.headerRowText}>Id</Text></View>
          <View style={styles.bigColumn}><Text style={styles.headerRowText}>adress</Text></View>
          <View style={styles.smallColumn}><Text style={styles.headerRowText}>Time</Text></View>
          <View style={styles.bigColumn}><Text style={styles.headerRowText}>Status</Text></View>
        </TouchableOpacity>
       <OrderRow navigation={this.props.navigation}/>
       <OrderRow navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffb5e8',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height/10,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    backgroundColor: '#d5aaff',
  },
  bigColumn: {
    flex: 3,
    height: height/10
  },
  smallColumn: {
    flex: 2,
    height: height/10
  },
  headerRowText: {
    fontSize: 14,
  }
});
