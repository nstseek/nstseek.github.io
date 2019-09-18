import React from 'react';
import { Text, View, Image, Linking, ToastAndroid } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

class AlbumComponent extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    styles = {
        viewStyle: {
            justifyContent: 'space-around'
        },
        imageStyle: {
            width: 50,
            height: 50
        },
        imageContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        },
        textStyle: {
            fontSize: 18
        },
        imageAlbumStyle: {
            height: 300,
            width: null,
            flex: 1
        }
    }

    buyNow() {
        ToastAndroid.show('oh boi, u just got Rick Rolled', ToastAndroid.LONG);
        Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <View style={this.styles.imageContainerStyle}>
                        <Image 
                            style={this.styles.imageStyle} 
                            source={{ uri: this.props.albumProp.thumbnail_image }} 
                        />
                    </View>
                    <View style={this.styles.viewStyle}>
                        <Text style={this.styles.textStyle}>{this.props.albumProp.title}</Text>
                        <Text>{this.props.albumProp.artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image 
                        source={{ uri: this.props.albumProp.image }}
                        style={this.styles.imageAlbumStyle}
                    />
                </CardSection>

                <CardSection>
                    <Button text={'Listen now for free!'} func={this.buyNow} />
                </CardSection>       
            </Card>
        );
    }
}

export default AlbumComponent;
