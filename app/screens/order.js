import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity,TextInput,Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Expo from 'expo';

const { width, height } = Dimensions.get('window');
export default class Order extends Component {
  static navigationOptions = {
    title: 'Order',
  };
  constructor(props) {
      super(props);
      this.state = {
          isAdressEditing: false,
          adress: 'Any street',
          adressBuf: 'Any street',
          status: '',
          statusBuf: '',
      };
  }

  editAdress = () =>{
    this.setState({
        isAdressEditing: true,
    })
  }

  saveAdress = () => {
      this.setState({
          isAdressEditing: false,
          adress: this.state.adressBuf,
      })
  }

  cancelAdress = () => {
      this.setState({
          isAdressEditing: false,
          adressBuf: this.state.adress,
      })
    }


  render() {
    return (
        <View style={styles.container}>
            <View style={styles.imageBlock}><Text style={styles.paramRowText}>Image</Text></View>
            <View style={styles.paramRow}><Text style={styles.paramRowText}>Coordinates</Text></View>
            <View style={styles.paramRow}>
                <Text style={styles.paramRowText}>Id :</Text>
                <Text style={styles.paramRowText}>1234</Text>
            </View>
                <View style={styles.paramRow}>
                    <Text style={styles.paramRowText}>Adress :</Text>
                        <TextInput
                            style={styles.paramRowText}
                            placeholder={this.state.adressBuf}
                            onChangeText={(text) => this.setState({adressBuf: text})}
                            editable={this.state.isAdressEditing}
                        />
                    {this.state.isAdressEditing ?
                        <View style={styles.buttonWrap}>
                            <Button
                                onPress={this.saveAdress}
                                title="Ok"
                                style={styles.button}
                            />
                            <Button
                                onPress={this.cancelAdress}
                                title="Cancel"
                                style={styles.button}
                            />
                        </View>
                        :
                        <View style={styles.buttonWrap}>
                            <Button
                                onPress={this.editAdress}
                                title="Edit"
                                style={styles.button}
                            />
                        </View>
                    }
                </View>
            <View style={styles.paramRow}>
                <Text style={styles.paramRowText}>Time field :</Text>
                <Text style={styles.paramRowText}>13:40</Text>
            </View>
            <View style={styles.paramRow}><Text style={styles.paramRowText}>Status field</Text></View>
            <View style={styles.paramRow}>
                <Button
                    title="Delete"
                    style={styles.button}
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffb5e8',
        padding: 20,
    },
    imageBlock: {
       height: ((height-40)/10)*3,
    },
    paramRow: {
        height: ((height-40)/10),
        flexDirection: 'row',
        width: width-40,
    },
    paramRowText: {
        fontSize: 14,
        flex: 3,
    },
    buttonWrap: {
        flex: 3,
        justifyContent:'space-between',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#ff2365',
        flex: 2,
        fontSize: 12,
    },
});
