/*
아이디(이메일) 찾기 - 아직 제작X  
*/


import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import viewStyles from "../../style/viewStyles.js";
import textStyles from '../../style/textStyles.js';



const FindEmail=({navigation})=> {

  return (
    <View style = {styles.container}>
      <View style={[textStyles.title2, { alignItems: 'center' }]}>
        <Text>아이디 찾기 페이지</Text>
      </View>

   </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title:{
      margin : 10, 
      backgroundColor:'yellow',
      alignItems : 'center',  
    },
    elem: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderColor:'#eee',
      borderBottomWidth:0.5,
      padding: 5,
    },
    text:{
      padding:4,
      margin : 4,
      //backgroundColor:'yellow',
    },
    textinput : {
      padding:4,
      margin : 4,
      borderColor : 'black',
      //backgroundColor: 'green',
    },
    row: {
      flexDirection : 'row ',
      alignItems : 'center',
      justifyContent: 'center',
    }
  })
  
export default FindEmail
