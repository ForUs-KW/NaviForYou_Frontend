//마이페이지

import React from 'react';
import { View, Text, Image} from 'react-native';

//import BackBtn from '../component/backBtn.js';
import CustomButton from "../component/CustomButton.js";
import textStyles from '../style/textStyles.js';

import rightArrow from "../img/rightArrow.png";

const MyPage = ({navigation})=>{
  return (
    <View>
        <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={40}
                lineWidth={0}
                title={'<'}
                titleSize={30}
                onPress={()=> {alert('뒤로가기');}}/>

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
      </View>


    </View> //container
  );//return
};

export default MyPage