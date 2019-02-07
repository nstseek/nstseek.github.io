import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {

    styles = {
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#FFF',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff'
        },
        textStyle: {
            alignSelf: 'center',
            color: '#007aff',
            fontWeight: '600',
            fontSize: 16,
            paddingTop: 10,
            paddingBottom: 10
        }
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.buttonStyle} onPress={this.props.func}>
                <Text style={this.styles.textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
            
        );
    }
}

export default Button;
