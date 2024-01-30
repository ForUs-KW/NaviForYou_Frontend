//CustomButton.js

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';

import textStyles from '../style/textStyles';


export default class CustomButton extends Component{

    static defaultProps = {
        title: 'untitled',
        buttonColor: 'blue',
        buttonWidth: '85%',
        borderRad: 10,
        titleColor: 'black',
        titleSize: 20,
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
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '15%',
        flexBasis:'auto',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 0,
      }
});