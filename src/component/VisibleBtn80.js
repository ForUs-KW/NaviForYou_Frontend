//visibleBtn80

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,} from 'react-native';


export default class VisibleBtn80 extends Component{

    static defaultProps = {
        title: 'untitled',
        buttonColor: 'blue',
        buttonWidth: '80%',
        borderRad: 10,
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
        {borderRadius: this.props.borderRad},
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.buttonText,
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
        marginBottom: 10,
      },
    buttonText: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
    },
});