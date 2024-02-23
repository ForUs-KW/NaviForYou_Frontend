//마이페이지

import React from 'react';
import { View, Text, Image} from 'react-native';

import BackBtn from "../component/BackBtn.js";
import CustomButton from "../component/CustomButton.js";
import textStyles from "../Style/TextStyles.js";

import rightArrow from "../img/rightArrow.png";

const MyPage = ({navigation})=>{

  return (
    <View>
        <BackBtn onPress={()=> {alert('뒤로가기');}}/>

      <Text style={textStyles.title1}>마이 페이지</Text>

      
      <View>
        <View>
          <Text style={textStyles.content20}
              onPress={() => navigation.navigate('LoginPage_1')}>     &gt;  로그인/회원가입
          </Text>
        </View>
        <Text style={textStyles.content20}
            onPress={() => navigation.navigate('EditInfo')}>     &gt;  회원 정보
        </Text>
        <Text  style={textStyles.content20}
            onPress={() => navigation.navigate('Settings')}>     &gt;  앱 설정 관리
        </Text>
        <Text  style={textStyles.content20}
            onPress={() => navigation.navigate('ReportPage_1')}>     &gt;  제보하기
        </Text>
        <Text  style={textStyles.content20}
             onPress={() => navigation.navigate('FindAccount')}>&gt; 계정찾기
        </Text> 
        <Text  style={textStyles.content20}
             onPress={() => navigation.navigate('LoginSucceed')}>&gt; 로그인 정보 확인
        </Text> 
        
      </View>
    </View> //container
  );
};

export default MyPage