//로그인/가입 방법 선택 화면

import React from "react";
import { View, Text, TextInput, SafeAreaView} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import textStyles from "../../style/textStyles.js";
import viewStyles from '../../style/viewStyles.js';

const LoginPage_1=({navigation})=> {

  //email
  const [email, onChangeEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  // password
  const [pw, onChangePW] = React.useState('');
  const [pwError, setPwError] = React.useState('');

  const handleCheckEmail=()=>{
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailCheck.test(email)){
        setEmailError('올바른 이메일 형식이 아닙니다.');
    }else if(!email){
        setEmailError('가입되지 않은 이메일입니다.');
    }
  };

  const handleCheckPassword=()=>{
    if (!pw) {
      setPwError('비밀번호가 올바르지 않습니다.');
    } else {
      setPwError('');
    }
  };

  return (
    <SafeAreaView>
      <CustomButton
        buttonColor={'(0, 0, 0, 0)'}
        buttonWidth={40}
        lineWidth={0}
        title={'<'}
        titleSize={30}
        onPress={()=> navigation.navigate('MyPage')}/>


      <View  style={viewStyles.centerItems}>
        <Text style={textStyles.title2}>로그인</Text>
        <CustomButton
          buttonColor={'white'}
          title={'카카오로 시작하기'}
          lineWidth={1}
          imageSource={require('../../img/kkoLogo.png')}
          imageStyle={{ width: 33, height: 33 }}
          onPress={() => { alert('카카오 api 연결'); }}
        />

        <CustomButton
          buttonColor={'white'}
          title={'네이버로 시작하기'}
          lineWidth={1}
          titleSize={18}
          imageSource={require('../../img/naverLogo.png')}
          imageStyle={{ width: 33, height: 33 }}
        />
      </View>
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1.5, backgroundColor: 'grey'}} />
          <Text style={{margin:20, fontSize:20}}>또는</Text>
        <View style={{flex: 1, height: 1.5, backgroundColor: 'grey'}} />
      </View>


      <View style={viewStyles.centerItems}>
        <Text style={textStyles.content20}>세바지 계정으로 로그인하기</Text>

        <TextInput
          style={viewStyles.textInput}
          onChangeText={(text)=>onChangeEmail(text)}
          placeholder="이메일을 입력해주세요."
          onBlur={() => handleCheckEmail()}
          autoCapitalize="none" //대문자 방지
          inputMode="email"
          returnKeyType="next"//애뮬레이터or모바일 확인 필요
          
        />
        {emailError ?(<Text style={textStyles.errorText}>{emailError}</Text>):null}

        <TextInput
          style={viewStyles.textInput}
          onChangeText={this.onChangePW}
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry={true}
          onBlur={() => handleCheckPassword()}
          autoCapitalize="none"
          returnKeyType="send"//애뮬레이터or모바일 확인 필요
        />
        {pwError ?(<Text style={textStyles.errorText}>{pwError}</Text>):null}
      </View>
        
      <View style={viewStyles.centerItems}>

        <CustomButton
          title={'로그인 하기'}
          titleColor={'white'}
          onPress={()=> {alert('로그인 하기');}}
        />

        <View style={viewStyles.tabview}>
          <CustomButton
            buttonColor={'(0, 0, 0, 0)'}
            buttonWidth={'40%'}
            title={'회원가입'}
            titleSize={12}
            onPress={()=> navigation.navigate('LoginPage_2')}/>
          <CustomButton
            buttonColor={'(0, 0, 0, 0)'}
            buttonWidth={'40%'}
            title={'아이디/비밀번호 찾기'}
            titleSize={12}
            onPress={()=> {alert('아이디/비밀번호 찾기');}}/>
        </View>
        
        <CustomButton
          buttonColor={'(0, 0, 0, 0)'}
          title={'회원가입 없이 시작'}
          onPress={()=> {alert('지도 페이지로 이동');}}/>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage_1