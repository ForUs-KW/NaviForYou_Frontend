/*
회원정보 수정 - 비밀번호 변경만 가능 
*/

import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import CustomButton from "../../component/CustomButton";
import viewStyles from "../../style/viewStyles.js";
import textStyles from '../../style/textStyles.js';




const FindPassword=({navigation})=> {

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    

  return (
    <View style = {styles.container}>
      <View style={[textStyles.title2, { alignItems: 'center' }]}>
        <Text>비밀번호 찾기 페이지</Text>
      </View>

      <Text style={textStyles.content20}>이메일</Text>

        <View style={viewStyles.tabview}>
            <TextInput
                style={viewStyles.textInputShort}
                value={email}
                onChangeText={setEmail}
                placeholder="아이디(이메일)를 입력해주세요."
                

            />

            <CustomButton
                buttonColor={'lightgrey'}
                buttonWidth={'25%'}
                title={'인증번호 발송'}
                titleSize={14}
                //onPress={()=> sendCodeEmail() }
            />
        </View>

        <View style={viewStyles.tabview}>
            <TextInput
                style={viewStyles.textInputShort}
                value={code}
                onChangeText={setCode}
                placeholder="인증번호를 입력해주세요."
                

            />

            <CustomButton
                buttonColor={'lightgrey'}
                buttonWidth={'25%'}
                title={'인증번호 확인'}
                titleSize={14}
                //onPress={()=> sendCodeEmail() }
            />
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
  

export default FindPassword
