import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";

import BackBtn from "../../component/BackBtn";
import SideBtn from "../../component/SideBtn";
import CustomButton from "../../component/CustomButton";
import viewStyles from "../../style/viewStyles";
import textStyles from "../../style/textStyles";

const LoginPage_3 = ({ navigation }) => {
    // 이메일
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    // 비밀번호
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    // 닉네임
    const [nickName, setNickName] = React.useState('');
    // 비밀번호 확인
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [confirmPasswordTouched, setConfirmPasswordTouched] = React.useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState('');


    // 이메일 형식 확인을 위한 함수
    const handleCheckEmail=()=>{
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailCheck.test(email)){
            setEmailError('올바른 이메일 형식이 아닙니다.');
        }else{
            setEmailError('');
        }
    };

    // 비밀번호 조건 확인을 위한 함수
    const handleCheckPassword=()=>{
        const specialCharacters = /[~!@#$%^&*]/;
        const containsConsecutiveCharacters = (password, id, consecutiveCount) => {
            for (let i = 0; i <= password.length - consecutiveCount; i++) {
              const consecutiveSubstring = password.substring(i, i + consecutiveCount);
              if (consecutiveSubstring === id) {
                return true;
              }
            }
            return false;
        };//이메일과 겹치는 지 확인

        if (password.length < 8 || password.length > 16) {
            setPasswordError('비밀번호 길이는 8자 이상 16자 이하로 해주세요.');
            return;
          } else if (!specialCharacters.test(password)) {
            setPasswordError('특수문자(~!@#$%^&*)를 한 개 이상 포함해주세요.');
            return;
          } else if (password === email || containsConsecutiveCharacters(password, email, 4)) {
            setPasswordError('비밀번호는 이메일과 4글자 이상 같을 수 없어요.');
            return;
          } else {
            setPasswordError('');
          }
    };

    const handlecheckDuplicationPassword = () => {
        // Validate Password Confirmation
        if (password !== confirmPassword) {
            setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
            return;
        } else {
            setConfirmPasswordError('');
        }
    };

  

  return (
    <ScrollView>
      <View>
        <BackBtn onPress={() => navigation.navigate('LoginPage_2')}/>
        <Text style={textStyles.h2}>정보 입력</Text>

        <View style={viewStyles.centerAlign}>
          <Text style={textStyles.b18}>이메일</Text>
        </View>
          <View style={viewStyles.horizontalAlign}>
            <TextInput
              style={viewStyles.textInputShort}
              placeholder="이메일 주소를 입력해주세요."
              onChangeText={(text) => {
                  setEmail(text);
                  handleCheckEmail();
              }} />
            <SideBtn
              buttonColor={'lightgrey'}
              buttonWidth={'25%'}
              title={'중복확인'}
              //onPress={}
            />
          </View>
          {emailError ?(<Text style={textStyles.error}>{emailError}</Text>):null}

          <View style={viewStyles.centerAlign}>
            <Text style={textStyles.b18}>비밀번호</Text>
            <TextInput
            style={viewStyles.textInput}
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={true}
            onChangeText={(text) => {
                setPassword(text);
                handleCheckPassword();
            }}
            />
            <Text style={textStyles.b12}>8~20자 이내로 영문 대소문자, 숫자 조합</Text>
            {passwordError ? (<Text style={textStyles.error}>{passwordError}</Text>) : null}



            <Text style={textStyles.b18}>비밀번호 확인</Text>

            <TextInput
            style={viewStyles.textInput}
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            secureTextEntry={true}
            onFocus={()=>setConfirmPasswordTouched(true)}
            onChangeText={(text) => {
                setConfirmPassword(text);
                handlecheckDuplicationPassword();
            }}
            />
            {confirmPasswordTouched && confirmPassword !== password ? (
                <Text style={textStyles.error}> {confirmPasswordError}</Text>) : null}
          </View>

          <View style={viewStyles.centerAlign}>
            <Text style={textStyles.b18}>닉네임</Text>
          </View>
          <View style={viewStyles.horizontalAlign}>
            <TextInput
              style={viewStyles.textInputShort}
              onChangeText={(text) => setNickName(text)}
              placeholder="닉네임을 입력해주세요."
            />
            <SideBtn
              buttonColor={'lightgrey'}
              buttonWidth={'25%'}
              title={'중복확인'}
              onPress={() => { alert('중복확인'); }}
            />
          </View>

          <View style={viewStyles.centerAlign}>
            <CustomButton
              buttonColor={'lightgrey'}
              title={'회원가입 완료하기'}
              onPress={()=> navigation.navigate('LoginPage_4')}
            />
          </View>
        </View>
    </ScrollView>
  );
};

export default LoginPage_3;