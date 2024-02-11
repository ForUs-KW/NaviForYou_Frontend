//로그인/가입 방법 선택 화면

import React from "react";
import { View, Text, TextInput, SafeAreaView} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import textStyles from "../../style/textStyles.js";
import viewStyles from '../../style/viewStyles.js';

const isValidEmail = (email)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const LoginPage_1=({navigation})=> {

  //input
  const [id, onChangeID] = React.useState('');
  const [pw, onChangePW] = React.useState('');
  const [idError, setIdError] = React.useState('');
  const [pwError, setPwError] = React.useState('');
  const handleLogin = () => {
    // Validate ID and Password
    if (!id) {
      setIdError('아이디를 입력하세요.');
    } else if(!isValidEmail(id)){
      setIdError('올바른 형식이 아닙니다.');
    }
    else {
      setIdError('');
    }

    if (!pw) {
      setPwError('비밀번호가 올바르지 않습니다');
    } else {
      setPwError('');
    }
  };

  return (
    <SafeAreaView>
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
          onPress={()=> {alert('카카오 api 연결');}}/>

        <CustomButton
          buttonColor={'white'}
          buttonWidth={'85%'}
          lineWidth={1}
          title={'네이버로 시작하기'}
          titleColor={'black'}
          titleSize={18}
        />
      </View>
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1.5, backgroundColor: 'grey'}} />
          <Text style={{margin:20, fontSize:24}}>또는</Text>
        <View style={{flex: 1, height: 1.5, backgroundColor: 'grey'}} />
      </View>


      <View>
        <Text style={textStyles.content20}>세바지 계정으로 로그인하기</Text>

      <View style={viewStyles.centerItems}>
        <TextInput
          style={viewStyles.textInput}
          onChangeText={(text)=>onChangeID(text)}
          placeholder="아이디를 입력해주세요."
          onBlur={() => handleLogin()}
          autoCapitalize="none" //대문자 방지
          inputMode="email"
          returnKeyType="next"//애뮬레이터or모바일 확인 필요
          
        />
        {idError !== '' && <Text style={textStyles.errorText}>{idError}</Text>}

        <TextInput
          style={viewStyles.textInput}
          onChangeText={this.onChangePW}
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry={true}
          onBlur={() => handleLogin()}
          autoCapitalize="none"
          returnKeyType="send"//애뮬레이터or모바일 확인 필요
        />
        {pwError !== '' && <Text style={textStyles.errorText}>{pwError}</Text>}
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
          onPress={()=> {alert('지도 페이지로 이동');}}/>
      </View>
        

      </View>
    </SafeAreaView>
  );
};

export default LoginPage_1