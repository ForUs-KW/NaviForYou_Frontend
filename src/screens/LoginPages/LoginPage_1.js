import React, { useState }from "react";
import { View, Text, TextInput, Alert, Button, SafeAreaView } from "react-native";
import * as KakaoLogins from "@react-native-seoul/kakao-login";
import { storeUserData } from "../../auth.js";

import CustomButton from "../../component/CustomButton.js";
import textStyles from "../../Style/TextStyles.js";
import viewStyles from "../../Style/ViewStyles.js";

import {Webview} from 'react-native-webview';
const isValidEmail = (email)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// KAKAO LOGIN

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;




const LoginPage_1 = ({ navigation }) => {
  const [id, onChangeID] = React.useState("입력해주세요");
  // const [pw, onChangePW] = React.useState("입력해주세요");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // [로그인 API]
  const handleLogin = async() => {
    try {
      // request Login
      const response = await fetch ("http://3.34.118.226:8080/app/member/login",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({email, password}),

      },
      );

      //wait for the response 
      const data = await response.json();

      // access token
      const accessToken = data.accessToken;

      //console.log(data.code+ " || " + data.message);
      //console.log(data.message);
      //message based on results
      if (accessToken) {
          console.log("로그인 성공했습니다.");
          await storeUserData(accessToken, email);
          // handle different error codes    
      } else {
        console.log(data.code+ " || " + data.message);
        // handle server error
      }
    } catch (error) {
      console.error("로그인 에러", error);
    }
  };

  
  

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

  
  //input

  // const validateLogin = () => {
  //   // Validate ID and Password
  //   if (!email) {
  //     //setIdError('아이디를 입력하세요.');
  //   } else if(!isValidEmail(email)){
  //     //setIdError('올바른 형식이 아닙니다.');
  //   }
  //   else {
  //     //setIdError('');
  //   }

  //   if (!password) {
  //     setPwError('비밀번호가 올바르지 않습니다');
  //   } else {
  //     setPwError('');
  //   }

  // };

  return (
    

      
    
    <SafeAreaView>
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
            onChangeText={(text) => setEmail(text)}
            placeholder="아이디를 입력해주세요."
            autoCapitalize="none" //대문자 방지
            inputMode="email"
            returnKeyType="next"//애뮬레이터or모바일 확인 필요
          />
          {/* {idError !== '' && <Text style={textStyles.errorText}>{idError}</Text>} */}

          <TextInput
            style={viewStyles.textInput}
            onChangeText={(text) => setPassword(text)}
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={true}
            //onBlur={() => validateLogin()}
            autoCapitalize="none"
             returnKeyType="send"//애뮬레이터or모바일 확인 필요
          />
          {/* {pwError !== '' && <Text style={textStyles.errorText}>{pwError}</Text>} */}

        </View>

        <View style={viewStyles.centerItems}>
          <CustomButton
            title="로그인 하기"
            titleColor="white"
            buttonColor="blue"
            onPress = {() => handleLogin()}
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
    </SafeAreaView>
  );
};

export default LoginPage_1;
