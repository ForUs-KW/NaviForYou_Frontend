import React from "react";
import { View, Text, TextInput} from "react-native";
//import {NaverLogin, getProfile} from "@react-native-seoul/naver-login";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../style/styles.js';
import HorizonLine from "../../component/HorizontalLine.js";

// const androidKeys = {
//   kConsumerKey: "naver client id",
//   kConsumerSecret: "naver secret id",
//   kServiceAppName: "세바지"
// };

const loginPage_1=({navigation})=> {
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
          buttonColor={'skyblue'}
          title={'<'}
          titleSize={30}
          onPress={()=> navigation.navigate('myPage')}/>

      <Text style={styles.title}>로그인</Text>

      <View  style={styles.centerItems}>
        <CustomButton
          buttonColor={'skyblue'}
          buttonWidth={'50%'}
          title={'카카오로 시작하기'}
          titleColor={'black'}
          titleSize={18}
          onPress={()=> {alert('카카오로 시작하기');}}/>

        <CustomButton
          buttonColor={'skyblue'}
          buttonWidth={'50%'}
          title={'네이버로 시작하기'}
          titleColor={'black'}
          titleSize={18}
          // onPress={()=> naverLogin(initials)}/>
          // {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout}/>}
          // {!!naverToken &&(<Button title="회원정보 가져오기" onPress={getUserProfile}/>)}
        />
      </View>
        <HorizonLine text={"또는"}/>

      <View>
        <Text style={styles.content}>세바지 계정으로 로그인하기</Text>

      <View>
      <TextInput
          style={styles.textInput}
          onChangeText={(text)=>{this.setState({inputText: text})}}
          placeholder="아이디를 입력해주세요."
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text)=>{this.setState({inputText: text})}}
          placeholder="비밀번호를 입력해주세요."
        />
      </View>
        
      <View style={styles.centerItems}>
      <CustomButton
          buttonColor={'skyblue'}
          buttonWidth={'50%'}
          title={'로그인 하기'}
          titleColor={'black'}
          titleSize={18}
          onPress={()=> {alert('로그인 하기');}}/>

        <View style={styles.tabview}>
          <CustomButton
            buttonColor={'skyblue'}
            buttonWidth={'40%'}
            title={'회원가입'}
            titleColor={'black'}
            titleSize={12}
            onPress={()=> navigation.navigate('loginPage_2')}/>
          <CustomButton
            buttonColor={'skyblue'}
            buttonWidth={'40%'}
            title={'아이디/비밀번호 찾기'}
            titleColor={'black'}
            titleSize={12}
            onPress={()=> {alert('아이디/비밀번호 찾기');}}/>
        </View>
        
        <CustomButton
          buttonColor={'skyblue'}
          buttonWidth={'50%'}
          title={'회원가입 없이 시작'}
          titleColor={'black'}
          titleSize={18}
          onPress={()=> {alert('회원가입 없이 시작');}}/>
      </View>
        

      </View>
    </View>
  );
};

export default loginPage_1