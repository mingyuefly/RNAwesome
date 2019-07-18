/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';
import { placeholder } from '@babel/types';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }

  render() {
    return(
      <View style = {{flex:1, flexDirection:'column', justifyContent:'center', padding:10}}>
        <TextInput style = {{height:40}} placeholder = "Type here to translate" onChangeText = {(text)=>this.setState({text})} />
        <Text style = {{padding:10, fontSize:42}}>
          {this.state.text.split(' ').map((word)=>word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}


