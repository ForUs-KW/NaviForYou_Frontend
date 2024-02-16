//BackBtn: 뒤로가기 버튼
//내용: 버튼의 모양 정의
//사용: <BackBtn onPress={()=> navigation.navigate('(이동할 페이지파일명)')}/>

import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet,} from 'react-native';

export default class CustomButton extends Component{

    static defaultProps = {
        onPress: () => null,
      };

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={styles.button}
        onPress={this.props.onPress}>
        <Image source={''} style={styles.image}/>
        <Text style={styles.button}>&lt;</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding:10,
      marginHorizontal: 10,
      //borderWidth:3,
      width:40,
      fontSize:30,
      color:'#3A3A3A',

    },
    image: {
      style:'',
    },
});