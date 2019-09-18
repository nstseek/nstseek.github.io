/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
        <View>
            <Header iae={'lulz'} />
        </View>
        );
    }
}

export default App;
