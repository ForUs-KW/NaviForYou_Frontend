//마이페이지 화면
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, Text} from 'react-native';

// import "react-native-gesture-handler";
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigation/StackNavigator.js';

import CustomButton from './src/component/CustomButton.js';
import styles from './src/styles.js';

export default function App() {
  return (
    <View>
        <CustomButton
        buttonColor={'skyblue'}
        titleColor={'black'}
        title={'<'}
        onPress={()=> {alert('뒤로가기');}}/>

        <Text style={styles.title}>마이 페이지</Text>

      
      <View>
        <Text style={styles.content}
          onPress={() => {alert('로그인/회원가입');}}>&gt; 로그인/회원가입
        </Text>
        <Text style={styles.content}
          onPress={() => {alert('회원 정보 수정');}}>&gt; 회원 정보 수정
        </Text>
        <Text  style={styles.content}
         onPress={() => {alert('앱 설정 관리');}}>&gt; 앱 설정 관리
        </Text>
        <Text  style={styles.content}
          onPress={() => {alert('제보하기');}}>&gt; 제보하기
        </Text>
      </View>

    </View> //container
  );//return
}
