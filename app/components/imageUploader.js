import React, { Component } from 'react';
import { ImagePicker } from 'expo';
import {View, Button, Image, Dimensions, StyleSheet, Text} from 'react-native';
import { updateOrderRequest } from '../actions';
import { connect } from 'react-redux';
import Geocoder from 'react-native-geocoder';

const { width, height } = Dimensions.get('window');

class imageUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: 'https://sigma-static-files.imgix.net/default_profile_pic.png',
            latitude: 'upload a photo to get latitude',
            longitude: 'upload a photo to get longitude',
            error: null,
            location: 'mesto',
        }
    }

    uploadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
        });
        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this.props.updateOrderRequest(
                this.props.order._id,
                this.props.order.adress,
                this.props.order.delivery_time,
                this.props.order.status,
                result.uri,
            );
            this.refresh();
        }
    };

    refresh = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
        );
    };

    componentDidMount(){

    }

    render() {
        return(
            <View>
                {this.props.order.photo===' ' ?
                    <Image style={{width: 'auto', height: ((height-40)/10)*3}} source={{uri: 'https://sigma-static-files.imgix.net/default_profile_pic.png'}} />
                    :
                    <Image style={{width: 'auto', height: ((height-40)/10)*3}} source={{uri: this.props.order.photo}} />
                }
                <Button
                    onPress={this.uploadImage}
                    title={'Upload a photo'}
                />
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { order, orders } = state.order;
    return { order, orders };
};

export default connect(mapStateToProps, { updateOrderRequest })( imageUploader );

const styles = StyleSheet.create({
    locationParam: {
        height: (height-40)/20,
    },
})