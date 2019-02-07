import React from 'react';
import { Text, View } from 'react-native';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {};
    }
    
    styles = {
        containerStyle: {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 2,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10
        }
    };
    
    render() {
        return (
            <View style={this.styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
    
}

export default Card;
