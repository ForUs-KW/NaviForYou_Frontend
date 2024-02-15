/*
회원정보 수정 - 비밀번호 변경만 가능 
*/

import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import CustomButton from "../../component/CustomButton";
import viewStyles from "../../Style/ViewStyles.js";
import textStyles from '../../Style/TextStyles.js';



// [비밀번호 찾기 - 이메일 코드 전송 API] - 응답 값 확인 필요
const FindPassword=({navigation})=> {

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    
    // [비밀번호 찾기 - 이메일 코드 전송 API]
    const sendResetCodeEmail = async (email) => {
        try {
            // 사용자가 입력한 이메일 주소 가져오기
            const UserEmail = email;
    
            // 서버에 이메일 중복 확인을 위한 요청 보내기
            const response = await fetch(`http://3.34.118.226:8080/app/member/searchPassword/sendCode?email=${encodeURIComponent(UserEmail)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // API 응답 결과 확인
            const data = await response.json(); 

            if(data.is_success){
                alert("성공");
            } else { 
                alert(data.message)      
            }
            
            // API 응답 결과 출력
            console.log(data);
        } catch (error) {
            // 네트워크 오류 또는 예기치 못한 오류가 발생한 경우
            console.error('비밀번호 재설정 코드 전송 중 예기치 못한 에러:', error);
            alert('비밀번호 재설정 코드 전송에 실패했습니다.[에러]');
        }
    };

    // [비밀번호 찾기 - 이메일 코드 인증 API]

    const checkResetCodeEmail = async() => {
        try {
          // request Login
          const response = await fetch ("http://3.34.118.226:8080/app/member/searchPassword/checkCode",{
            method : "POST",
            headers : {
              "Content-Type" : "application/json",
            },
            body : JSON.stringify({email, code}),
    
          },
          );
    
          //wait for the response 
          const data = await response.json();

    
          //message based on results
            if (response.ok) {
                alert(data.message);
            } else {
                alert("서버 오류", "요청에 실패했습니다.");
            }
            
        } catch (error) {
          console.error("로그인 에러", error);
          alert("에러", "서버에 연결할 수 없습니다.");
        }
      };


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
                keyboardType="email-address" 
                

            />

            <CustomButton
                buttonColor={'lightgrey'}
                buttonWidth={'25%'}
                title={'인증번호 발송'}
                titleSize={14}
                onPress={()=> sendResetCodeEmail(email) }
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
                onPress={()=> checkResetCodeEmail(email, code) }
            />
        
            
        </View>

        <View style={viewStyles.tabview}>
        <CustomButton
                buttonColor={'lightgrey'}
                buttonWidth={'25%'}
                title={'비밀번호 변경하기'}
                titleSize={14}
                onPress={() => navigation.navigate('EditInfo')}
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
