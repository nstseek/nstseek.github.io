import React from 'react';
import { Picker, Button, Text, View, TextInput } from 'react-native';

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const styles = {
            textInputStyle: {
                height: 40,
                margin: 10,
                backgroundColor: '#EEE'
            },
            pickerStyle: {
                height: 40,
                margin: 10,
                backgroundColor: '#EEE'
            },
            viewStyle: {
                backgroundColor: '#111', 
                height: '100%'
            },
            buttonStyle: {
                
            }
        };
        
        return (
            <View style={styles.viewStyle}>
                <TextInput 
                    style={{
                        height: 40,
                        margin: 10,
                        marginTop: 40,
                        backgroundColor: '#EEE' }} 
                    value={String(this.props.value1)} 
                    onChangeText={this.props.updateVar1} 
                />
                <TextInput 
                    style={styles.textInputStyle} 
                    value={String(this.props.value2)} 
                    onChangeText={this.props.updateVar2}
                />
                <Picker 
                    selectedValue={this.props.operator} 
                    onValueChange={this.props.updateOperator}
                    style={styles.pickerStyle}
                >
                    <Picker.Item label='+' value='+' />
                    <Picker.Item label='-' value='-' />
                    <Picker.Item label='*' value='*' />
                    <Picker.Item label='/' value='/' />
                </Picker>
                <View style={{ margin: 10 }}>
                    <Button onPress={this.props.calculate} title='calculate' color='#010101' />
                </View>
                <View style={{ backgroundColor: '#222', margin: 10 }}>
                    <Text style={{ color: '#FFF', textAlign: 'center', margin: 10 }}>
                        {this.props.result}
                    </Text> 
                </View>
                
            </View>
        );
    }

}

export default Calculator;
