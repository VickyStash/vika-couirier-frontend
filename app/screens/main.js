import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity, Button, FlatList } from 'react-native';
import OrderRow from '../components/orderRow';
import { ordersRequest } from '../actions';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

class Main extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount(){
      this.props.ordersRequest();
  }
  render() {
      console.log(this.props.orders+'вооооот оно');
      const { ordersRequest } = this.props;
     return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.smallColumn}><Text style={styles.headerRowText}>Id</Text></View>
          <View style={styles.bigColumn}><Text style={styles.headerRowText}>Adress</Text></View>
          <View style={styles.smallColumn}><Text style={styles.headerRowText}>Time</Text></View>
          <View style={styles.bigColumn}><Text style={styles.headerRowText}>Status</Text></View>
        </View>
         {
              this.props.orders &&
              this.props.orders.map((order) =>{
                  return(
                      <OrderRow navigation={this.props.navigation} key={order._id} order={order} />
                  )
              })
          }
      </View>
    );
  }
}


const mapStateToProps = (state) => {
    const { orders } = state.order;
    return { orders };
};

export default connect(mapStateToProps, { ordersRequest })(
    Main
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffb5e8',
    },
    headerRow: {
        flexDirection: 'row',
        height: height/10,
        backgroundColor: '#d5aaff',
    },
    bigColumn: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        height: height/10,
    },
    smallColumn: {
        flex: 2,
        alignItems: 'center',
        height: height/10,
        justifyContent: 'center'
    },
    headerRowText: {
        fontSize: 14,
    }
});
