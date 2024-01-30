//뒤로가기 버튼

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';


export default class BackBtn extends Component{
  static defaultProps = {
    title: '<',
    onPress: () => null,
  }

  constructor(props){ super(props); }

  render(){
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}


