//SideBtn.js
//내용: component 옆에 horizontal로 정렬되는 작은 버튼.
//      margin이 붙으면 자꾸 이상하게 정렬이 안돼서 따로 만들었다
//      CustomButton과 비교하면 marginTop이 없는 버전.

import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet,} from 'react-native';

import textStyles from '../style/textStyles';


export default class CustomButton extends Component{

    static defaultProps = {
        title: 'untitled',
        titleColor: '#3A3A3A',
        buttonColor: '#5796F5',
        buttonWidth: '25%',
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
      ]}
      onPress={this.props.onPress}>
        <Text style={{color: this.props.titleColor}}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      borderColor:'gray',
      borderWidth: 0,
      borderRadius: 5,

      fontSize:18,

      paddingVertical: 12,
      paddingHorizontal: 20,
      marginHorizontal: 10,
    },
    image: {
      marginRight:10,
    },
});