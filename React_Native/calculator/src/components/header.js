import React from 'react';
import { Text, View } from 'react-native';

class Header extends React.Component {

    render() {
        const styles = {
            viewStyle: {
                backgroundColor: '#3d3d3d',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                height: 60,
                borderBottomColor: '#FFF',
                borderBottomWidth: 5
            },
            textStyle: {
                color: '#eeeeee',
                fontSize: 20
            }
        };

        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Simple calculator</Text>
            </View>
        );
    }
}

export default Header;
