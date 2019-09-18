/* eslint-disable brace-style */
import React from 'react';
import { View, Alert } from 'react-native';
import Header from './src/components/header.js';
import Calculator from './src/components/calculator.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      operator: '+',
      var1: '0',
      var2: '0',
      result: 'Your result should appear here'
    };
  }

  calculate = () => {
    if (this.state.operator === '+') {
      this.setState({
        result: (Number(this.state.var1) + Number(this.state.var2))
      });
    }

    if (this.state.operator === '-') {
      this.setState({
        result: (Number(this.state.var1) - Number(this.state.var2))
      });
    }

    if (this.state.operator === '*') {
      this.setState({
        result: (Number(this.state.var1) * Number(this.state.var2))
      });
    }

    if (this.state.operator === '/') {
      if (Number(this.state.var2) === 0) {
        Alert.alert('Error', 'Can\'t divide by zero',
        [{ text: 'OK' }]
        );
      }
      else {
        this.setState({
          result: (Number(this.state.var1) / Number(this.state.var2))
        });
      }
    }
  }

  updateVar1 = (value) => {
    this.setState({
      var1: value
    });
  }

  updateVar2 = (value) => {
    this.setState({
      var2: value
    });
  }

  updateOperator = (value) => {
    this.setState({
      operator: value
    });
  }

  render() {
    return (
    <View>
      <Header />
      <Calculator 
        updateVar1={this.updateVar1} 
        updateVar2={this.updateVar2} 
        value1={this.state.var1} 
        value2={this.state.var2}
        operator={this.state.operator}
        updateOperator={this.updateOperator}
        calculate={this.calculate}
        result={this.state.result}
      />     
    </View>      
    );
  }

}

export default App;
