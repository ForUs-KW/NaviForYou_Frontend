//CustomButton.js

import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet,} from 'react-native';

import textStyles from '../Style/TextStyles';


export default class CustomButton extends Component{

    static defaultProps = {
        imageSource: null,
        imageStyle: {},
        title: 'untitled',
        buttonColor: '#5796F5',
        lineWidth: 0,
        buttonWidth: '85%',
        borderRad: 5,
        titleColor: '#3A3A3A',
        titleSize: 18,
        onPress: () => null,
      };

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
        <Image
          source={this.props.imageSource}
          style={[styles.image, this.props.imageStyle]}/>
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      borderColor:'grey',
      borderWidth: 0,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
      marginHorizontal: 10,
    },
    image: {
      marginRight:10,
    },
});