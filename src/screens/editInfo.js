/*
회원정보 수정 - 비밀번호 변경만 가능 
*/

import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import viewStyles from "../style/viewStyles";
import textStyles from '../style/textStyles.js';



const editInfo=({navigation})=> {

  return (
    <View style = {styles.container}>
      <View style={[textStyles.title2, { alignItems: 'center' }]}>
        <Text>비밀번호 변경 페이지</Text>
      </View>

      <View style = {styles.elem}> 

        <Text style = {styles.text}> 
          현재 비밀번호
        </Text>

        <TextInput style = {styles.textinput} 
          placeholder="현재 비밀번호"
          secureTextEntry={true}
          />

      </View>
      
      <View style = {styles.elem}> 

       <Text style = {styles.text}> 
           새로운 비밀번호
       </Text>


        <TextInput
          placeholder="새로운 비밀번호"
          secureTextEntry={true}
          onChangeText={text => setNewPassword(text)}
        />

      </View>

      <View style = {styles.elem}> 

       <Text style = {styles.text}> 
           새로운 비밀번호 확인
       </Text>


        <TextInput
          placeholder="새로운 비밀번호 확인 "
          secureTextEntry={true}
          onChangeText={text => setConfirmNewPassword(text)}
        />

      </View>

      <Button
        title="비밀번호 변경"
      />

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

export default editInfo