//로그인 화면

import React from "react";
import { View, Text, TextInput} from "react-native";
//import {NaverLogin, getProfile} from "@react-native-seoul/naver-login";

import CustomButton from "../../component/CustomButton.js";
import textStyles from "../../style/textStyles.js";
import viewStyles from '../../style/viewStyles.js';

// const androidKeys = {
//   kConsumerKey: "naver client id",
//   kConsumerSecret: "naver secret id",
//   kServiceAppName: "세바지"
// };

const LoginPage_1=({navigation})=> {
//   const [naverToken, setNaverToken] = React.useState(null);

// const naverLogin = props => {
//   return new Promise((resolve, reject)=>{
//       NaverLogin.login(props, (err, token)=> {
//         console.log('\n\n Token is fetched :: ${token}\n\n');
//         setNaverToken(token);
//         if(err){
//           reject(err);
//           return;
//         }
//       });
//     });
//   };//naver login

  // const naverLogout=()=>{
  //   NaverLogin.logout();
  //   setNaverToken("");
  // };

  // const getUserProfile = async()=>{
  //   const profileResult = await getProfile(naverToken.accessToken);
  //   if (profileResult.resultcode === "024"){
  //     Alert.alert("로그인 실패", profileResult.message);
  //     return;
  //   }
  //   console.log("profileResult", profileResult);
  // };

  return (
    <View>
      <CustomButton
        buttonColor={'(0, 0, 0, 0)'}
        buttonWidth={'15%'}
        title={'<'}
        titleSize={30}
        onPress={()=> navigation.navigate('MyPage')}/>
          


      <View  style={viewStyles.centerItems}>
        <Text style={textStyles.title2}>로그인</Text>
        <CustomButton
          buttonColor={'white'}
          buttonWidth={'85%'}
          lineWidth={1}
          title={'카카오로 시작하기'}
          titleColor={'black'}
          onPress={()=> {alert('카카오로 시작하기');}}/>

        <CustomButton
          buttonColor={'white'}
          buttonWidth={'85%'}
          lineWidth={1}
          title={'네이버로 시작하기'}
          titleColor={'black'}
          titleSize={18}
          // onPress={()=> naverLogin(initials)}/>
          // {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout}/>}
          // {!!naverToken &&(<Button title="회원정보 가져오기" onPress={getUserProfile}/>)}
        />
      </View>
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1.5, backgroundColor: 'grey'}} />
        <View>
          <Text style={{margin:20, fontSize:24}}>또는</Text>
        </View>
        <View style={{flex: 1, height: 1.5, backgroundColor: 'grey'}} />
      </View>


      <View>
        <Text style={textStyles.content20}>세바지 계정으로 로그인하기</Text>

      <View style={viewStyles.centerItems}>
        <TextInput
          style={viewStyles.textInput}
          onChangeText={(text)=>{this.setState({inputText: text})}}
          placeholder="아이디를 입력해주세요."
        />
        <TextInput
          style={viewStyles.textInput}
          onChangeText={(text)=>{this.setState({inputText: text})}}
          placeholder="비밀번호를 입력해주세요."
        />
      </View>
        
      <View style={viewStyles.centerItems}>

        <CustomButton
          title={'로그인 하기'}
          titleColor={'white'}
          buttonColor={'blue'}
          onPress={()=> {alert('로그인 하기');}}/>

        <View style={viewStyles.tabview}>
          <CustomButton
            buttonColor={'(0, 0, 0, 0)'}
            buttonWidth={'41%'}
            title={'회원가입'}
            titleSize={12}
            onPress={()=> navigation.navigate('LoginPage_2')}/>
          <CustomButton
            buttonColor={'(0, 0, 0, 0)'}
            buttonWidth={'41%'}
            title={'아이디/비밀번호 찾기'}
            titleSize={12}
            onPress={()=> {alert('아이디/비밀번호 찾기');}}/>
        </View>
        
        <CustomButton
          buttonColor={'(0, 0, 0, 0)'}
          title={'회원가입 없이 시작'}
          onPress={()=> {alert('회원가입 없이 시작');}}/>
      </View>
        

      </View>
    </View>
  );
};

export default LoginPage_1