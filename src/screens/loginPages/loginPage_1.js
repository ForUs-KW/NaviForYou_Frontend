import React from "react";
import { View, Text, TextInput, Alert, Button } from "react-native";
import * as KakaoLogins from "@react-native-seoul/kakao-login";
import CustomButton from "../../component/CustomButton.js";
import textStyles from "../../style/textStyles.js";
import viewStyles from "../../style/viewStyles.js";

import {Webview} from 'react-native-webview';

// KAKAO LOGIN
const REST_API_KEY = '7cc503f8f35ee5bebc80458ff8f84cea'
const REDIRECT_URI = 'http://localhost:8080/app/member/kakao'

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;




const LoginPage_1 = ({ navigation }) => {
  const [id, onChangeID] = React.useState("입력해주세요");
  const [pw, onChangePW] = React.useState("입력해주세요");

  
  

  const naverLogin = async () => {
    try {
      // Implement Naver login logic here
      // For example:
      // const token = await NaverLogin.login(androidKeys);
      // console.log("Token is fetched:", token);
    } catch (error) {
      console.error("Naver login error:", error);
    }
  };

  const naverLogout = () => {
    // Implement Naver logout logic here
    // For example:
    // NaverLogin.logout();
  };

  const getUserProfile = async () => {
    // Implement getting user profile logic here
    // For example:
    // const profileResult = await getProfile(naverToken.accessToken);
    // console.log("Profile Result", profileResult);
  };

  

  return (
    <View>
      <CustomButton
        buttonColor="(0, 0, 0, 0)"
        buttonWidth="15%"
        title="<"
        titleSize={30}
        onPress={() => navigation.navigate("MyPage")}
      />

      <View style={viewStyles.centerItems}>
        
        <Text style={textStyles.title2}>로그인</Text>
        <CustomButton
          buttonColor="white"
          buttonWidth="85%"
          lineWidth={1}
          title="카카오로 시작하기"
          titleColor="black"
          onPress={() => 
            {
              alert("카카오로 로그인하기 ");
              //KakaoLogin();
              alert("함수 호출");
            }
          }// 로그 추가}
        />

        <CustomButton
          buttonColor="white"
          buttonWidth="85%"
          lineWidth={1}
          title="네이버로 시작하기"
          titleColor="black"
          titleSize={18}
          onPress={naverLogin}
        />

        <CustomButton
          buttonColor="white"
          buttonWidth="85%"
          lineWidth={1}
          title="구글로 시작하기"
          titleColor="black"
          titleSize={18}
          //onPress={naverLogin}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1.5, backgroundColor: "grey" }} />
        <View>
          <Text style={{ margin: 20, fontSize: 24 }}>또는</Text>
        </View>
        <View style={{ flex: 1, height: 1.5, backgroundColor: "grey" }} />
      </View>

      <View>
        <Text style={textStyles.content20}>세바지 계정으로 로그인하기</Text>

        <View style={viewStyles.centerItems}>
          <TextInput
            style={viewStyles.textInput}
            onChangeText={(text) => onChangeID(text)}
            placeholder="아이디를 입력해주세요."
          />
          <TextInput
            style={viewStyles.textInput}
            onChangeText={(text) => onChangePW(text)}
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={true}
          />
        </View>

        <View style={viewStyles.centerItems}>
          <CustomButton
            title="로그인 하기"
            titleColor="white"
            buttonColor="blue"
            onPress={() => {
              alert("로그인 하기");
            }}
          />

          <View style={viewStyles.tabview}>
            <CustomButton
              buttonColor="(0, 0, 0, 0)"
              buttonWidth="41%"
              title="회원가입"
              titleSize={12}
              onPress={() => navigation.navigate("LoginPage_2")}
            />
            <CustomButton
              buttonColor="(0, 0, 0, 0)"
              buttonWidth="41%"
              title="아이디/비밀번호 찾기"
              titleSize={12}
              onPress={() => {
                alert("아이디/비밀번호 찾기");
              }}
            />
          </View>

          <CustomButton
            buttonColor="(0, 0, 0, 0)"
            title="회원가입 없이 시작"
            onPress={() => {
              alert("회원가입 없이 시작");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginPage_1;
