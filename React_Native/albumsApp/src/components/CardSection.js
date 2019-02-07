import React from 'react';
import { Text, View } from 'react-native';

class CardSection extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    styles = {
        containerStyle: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
        }
    }

    render() {
        return (
            <View style={this.styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

export default CardSection;
