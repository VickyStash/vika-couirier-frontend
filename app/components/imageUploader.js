import React, { Component } from 'react'
import { ImagePicker } from 'expo'
import {View, Button, Image, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

export default class imageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'https://sigma-static-files.imgix.net/default_profile_pic.png'
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
        }
    };
    render() {
        return(
            <View>
                <Image style={{width: 'auto', height: ((height-40)/10)*3}} source={{uri: this.state.image}} />
                <Button
                    onPress={this.uploadImage}
                    title={'Take a photo'}
                />
            </View>
        )
    }
}
