import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Button, Picker } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalDropdown from 'react-native-modal-dropdown';
import ImageUploader from '../components/imageUploader';
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
          status: 'tut',
          statusBuf: 'buff',
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
            <View style={styles.imageBlock}>
                <ImageUploader/>
            </View>
            <View style={styles.paramRow}>
                <Text style={styles.paramRowText}>Id :</Text>
                <Text style={styles.paramRowText}>1234</Text>
                <Text style={styles.paramRowText} />
            </View>
                <View style={styles.paramRow}>
                    <Text style={styles.paramRowText}>Adress :</Text>
                        <TextInput
                            style={styles.paramRowText}
                            placeholderTextColor='#000000'
                            placeholder={this.state.adressBuf}
                            onChangeText={(text) => this.setState({adressBuf: text})}
                            editable={this.state.isAdressEditing}
                        />
                    {this.state.isAdressEditing ?
                        <View style={styles.buttonWrap}>
                            <Button
                                onPress={this.saveAdress}
                                title="Ok"
                                color='#ff2365'
                                style={styles.button}
                            />
                            <Button
                                onPress={this.cancelAdress}
                                title="Cancel"
                                color='#ff2365'
                                style={styles.button}
                            />
                        </View>
                        :
                        <View style={styles.buttonWrap}>
                            <Button
                                onPress={this.editAdress}
                                title="Edit"
                                color='#ff2365'
                                style={styles.button}
                            />
                        </View>
                    }
                </View>
            <View style={styles.paramRow}>
                <Text style={styles.paramRowText}>Time field :</Text>
                <Text style={styles.paramRowText}>13:40</Text>
                <Text style={styles.paramRowText} />
            </View>
            <View style={styles.paramRow}>
                <Text style={styles.paramRowText}>Status field</Text>
                <ModalDropdown
                    options={['In process', 'Ready']}
                    style={styles.dropdown}
                    dropdownStyle={styles.dropdown_dropdown}
                    onSelect={(value) => this.setState({statusBuf : value})}
                />
                <Text style={styles.paramRowText} />
            </View>
            <View style={styles.paramRow}>
                <Button
                    title="Delete"
                    style={styles.delButton}
                    color='black'
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
       height: ((height-40)/10)*4,
       width: width-40,
       justifyContent: 'center',
    },
    paramRow: {
        height: ((height-40)/10),
        flexDirection: 'row',
        alignItems: 'center',
        width: width-40,
    },
    paramRowText: {
        fontSize: 14,
        flex: 3,
        color: '#000000',
        fontWeight: 'bold'
    },
    buttonWrap: {
        flex: 3,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        flex: 2,
        fontSize: 12,
        height: 20,
    },
    delButton: {
        flex: 1,
        height: 20,
    },
    dropdown: {
        flex: 3,
    },
    dropdown_dropdown: {
        height: 70,
    }
});














