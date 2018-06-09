import React, { Component } from 'react';
import { ImagePicker } from 'expo';
import {View, Button, Image, Dimensions, StyleSheet, Text} from 'react-native';
import Geocoder from 'react-native-geocoder';

const { width, height } = Dimensions.get('window');

export default class imageUploader extends Component {
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

    render() {
        return(
            <View>
                <Image style={{width: 'auto', height: ((height-40)/10)*3}} source={{uri: this.state.image}} />
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

const styles = StyleSheet.create({
    locationParam: {
        height: (height-40)/20,
    },
})