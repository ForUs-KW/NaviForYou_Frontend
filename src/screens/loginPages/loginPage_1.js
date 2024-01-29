import React from "react";
import { View, Text, TextInput} from "react-native";
import {NaverLogin, getProfile} from "@react-native-seoul/naver-login";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';
import HorizonLine from "../../component/HorizontalLine.js";

const androidKeys = {
  kConsumerKey: "naver client id",
  kConsumerSecret: "naver secret id",
  kServiceAppName: "세바지"
};

function loginPage_1() {
  const [naverToken, setNaverToken] = React.useState(null);

  const naverLogin = props => {
    return new Promise((resolve, reject)=>{
      NaverLogin.login(props, (err, token)=> {
        console.log('\n\n Token is fetched :: ${token}\n\n');
        setNaverToken(token);
        if(err){
          reject(err);
          return;
        }
      });
    });
  };//naver login

  const naverLogout=()=>{
    NaverLogin.logout();
    setNaverToken("");
  };

  const getUserProfile = async()=>{
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === "024"){
      Alert.alert("로그인 실패", profileResult.message);
      return;
    }
    console.log("profileResult", profileResult);
  };

  return (
    <View>
        <CustomButton
          buttonColor={'skyblue'}
          titleColor={'black'}
          title={'<'}
          onPress={()=> {alert('뒤로가기');}}/>

      <Text style={styles.title}>로그인</Text>

      <CustomButton
        buttonColor={'skyblue'}
        titleColor={'black'}
        title={'카카오로 시작하기'}
        onPress={()=> {alert('카카오로 시작하기');}}/>

      <CustomButton
        buttonColor={'skyblue'}
        titleColor={'black'}
        title={'네이버로 시작하기'}
        onPress={()=> naverLogin(initials)}/>
        {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout}/>}
        {!!naverToken &&(<Button title="회원정보 가져오기" onPress={getUserProfile}/>)}

        <HorizonLine text={"또는"}/>

      <View>
        <Text style={styles.content}>세바지 계정으로 로그인하기</Text>

        <TextInput
          style={Styles.textInput}
          onChangeText={(text)=>{this.setState({inputText: text})}}
          placeholder="아이디를 입력해주세요."
        />
        <TextInput
          style={Styles.textInput}
          onChangeText={(text)=>{this.setState({inputText: text})}}
          placeholder="비밀번호를 입력해주세요."
        />


        <CustomButton
          buttonColor={'skyblue'}
          titleColor={'black'}
          title={'로그인 하기'}
          onPress={()=> {alert('로그인 하기');}}/>

        <CustomButton
          buttonColor={'skyblue'}
          titleColor={'black'}
          title={'회원가입'}
          onPress={()=> {alert('회원가입');}}/>
        <CustomButton
          buttonColor={'skyblue'}
          titleColor={'black'}
          title={'아이디/비밀번호 찾기'}
          onPress={()=> {alert('아이디/비밀번호 찾기');}}/>
        
        <CustomButton
          buttonColor={'skyblue'}
          titleColor={'black'}
          title={'회원가입 없이 시작'}
          onPress={()=> {alert('회원가입 없이 시작');}}/>
      </View>{/* 세바지 계정 로그인 */}
    </View>
  );
};
