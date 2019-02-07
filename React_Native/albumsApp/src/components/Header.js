import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#00c4ba',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2           
        },
        elevation: 2,
        shadowOpacity: 0.2,
        position: 'relative'
    }
};

export default Header;
