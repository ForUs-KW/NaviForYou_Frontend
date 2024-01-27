import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';

function loginPage() {
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
        onPress={()=> {alert('네이버로 시작하기');}}/>

      <Text style={styles.content}>또는</Text>

      <View>
        <Text style={styles.content}>세바지 계정으로 로그인하기</Text>



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
