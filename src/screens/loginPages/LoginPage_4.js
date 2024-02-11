//세바지 회원가입 완료

import React from "react";
import { View, Text, Image} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";
import icon from '../../../assets/icon.png';

const LoginPage_4=({navigation})=> {
  return (
    <View style={viewStyles.centerItems}>
        <Text style={textStyles.title2}>세바지에 온 걸 환영해요</Text>
        <Image source={icon} style={viewStyles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            title={'시작하기'}
            onPress={()=> navigation.navigate('MyPage')}/>
    </View>
  );
};

export default LoginPage_4