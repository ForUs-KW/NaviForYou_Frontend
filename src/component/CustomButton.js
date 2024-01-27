//CustomButton.js

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';

export default class CustomButton extends Component{

    static defaultProps = {
        title: 'untitled',
        buttonColor: 'blue',
        titleColor: 'black',
        onPress: () => null,
      }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.buttonText,
          {color: this.props.titleColor}
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
        width: 60,
        flexBasis:'auto',
        //borderRadius: 10,
        //marginBottom: 10,
      },
      buttonText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
      },
});