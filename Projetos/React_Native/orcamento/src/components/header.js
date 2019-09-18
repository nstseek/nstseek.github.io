/* eslint-disable brace-style */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Arrow from '../img/308959.png';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            styles: {
                imageStyle: {
                    height: 30,
                    width: 30,
                    alignSelf: 'flex-start',
                    marginLeft: 10
                },
                textStyle: {
                    color: '#000',
                    fontSize: 20
                },
                viewStyle: {
                    backgroundColor: '#DDD',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 10,
                    height: 60,
                    borderBottomColor: '#FFF',
                    borderBottomWidth: 5
                },
                touchableOpacityStyle: {
                    position: 'absolute',
                    alignSelf: 'flex-start',
                }
            },
            text: 'eae meu bom',
            showArrow: 1
        };
    }

    onArrowPress = () => {
        this.setState({
            text: 'qual foi meu bom, ta clicando na seta pq, que apanha? me da essa seta seu fudido',
            showArrow: 0
        });
    }

    storeImageComponent = () => {
        if (this.state.showArrow === 1) {
            return (
        <TouchableOpacity 
        style={this.state.styles.touchableOpacityStyle} 
        onPress={this.onArrowPress}
        >
            <Image source={Arrow} style={this.state.styles.imageStyle} />
        </TouchableOpacity>
        );
        }
        else { 
            return (<Text style={{position: 'absolute'}}></Text>); 
        }
    };

    render() {
        const image = this.storeImageComponent();

        return (
            <View style={this.state.styles.viewStyle}>
                {image}
                <Text style={this.state.styles.textStyle}>{this.state.text}</Text>
            </View>
        );
    }
}

export default Header;
