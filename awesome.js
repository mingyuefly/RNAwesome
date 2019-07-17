/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
  render () {
    return (
    <View style = {{alignItems: 'center', margin:50}}>
      <Text>Hello {this.props.name}</Text>
    </View>
    );
  };
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style = {{alignItems:"center"}}>
        <Greeting name = 'Rexxar' />
        <Greeting name = 'Jaina' />
        <Greeting name = 'Valeera' />
      </View>
    );
  }
}