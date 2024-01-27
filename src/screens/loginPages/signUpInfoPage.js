import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';

function signUpInfoPage() {
  return (
    <View>
        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'<'}
            onPress={()=> {alert('뒤로가기');}}/>

        <Text style={styles.title}>정보를 입력해주세요</Text>

        <View>
            <Text style={styles.content}>아이디</Text>
            
            <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'중복확인'}
            onPress={()=> {alert('중복확인');}}/>
        </View>

        <View>
            <Text style={styles.content}>비밀번호</Text>
            <Text style={styles.content}>8~20자 이내로 영분 대소문자, 숫자, 특수문자를 모두 사용하여 구성</Text>
        
            <Text style={styles.content}>비밀번호 확인</Text>
            <Text style={styles.content}>비밀번호가 일치하지 않습니다</Text>
        </View>
        
        <View>
            <Text style={styles.content}>닉네임</Text>
            
            <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'중복확인'}
            onPress={()=> {alert('중복확인');}}/>
        </View>

        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'회원가입 완료하기'}
            onPress={()=> {alert('회원가입 완료하기');}}/>
    </View>
  );
};