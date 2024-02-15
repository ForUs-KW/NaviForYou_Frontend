//CustomButton.js

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';

import textStyles from '../Style/TextStyles';


export default class CustomButton extends Component{

    static defaultProps = {
        title: 'untitled',
        buttonColor: 'blue',
        lineWidth: 0,
        buttonWidth: '85%',
        borderRad: 5,
        titleColor: 'black',
        titleSize: 18,
        onPress: () => null,
      }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor},
        {width: this.props.buttonWidth},
        {borderRadius: this.props.borderRad},
        {borderWidth: this.props.lineWidth},
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          {color: this.props.titleColor},
          {fontSize: this.props.titleSize}
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      borderColor:'grey',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
      marginHorizontal: 10,
    }
});