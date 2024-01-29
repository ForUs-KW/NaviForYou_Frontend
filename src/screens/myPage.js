//마이페이지 화면
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, Text} from 'react-native';

// import "react-native-gesture-handler";
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigation/StackNavigator.js';

import CustomButton from "../component/CustomButton.js";
import styles from '../style/styles.js';

const myPage = ({navigation})=>{
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
            onPress={() => navigation.navigate('loginPage_1')}>&gt; 로그인/회원가입
        </Text>
        <Text style={styles.content}
            onPress={() => navigation.navigate('editInfo')}>&gt; 회원 정보 수정
        </Text>
        <Text  style={styles.content}
            onPress={() => navigation.navigate('settings')}>&gt; 앱 설정 관리
        </Text>
        <Text  style={styles.content}
            onPress={() => navigation.navigate('reportPage_1')}>&gt; 제보하기
        </Text>
      </View>


    </View> //container
  );//return
};

export default myPage