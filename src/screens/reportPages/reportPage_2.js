//완료 알림 페이지

import React from "react";
import { View, Text, Image} from "react-native";


import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";
import icon from '../../../assets/icon.png';

const ReportPage_2=({navigation})=> {
  return (
    <View style={viewStyles.centerAlign}>

        <Text style={textStyles.h1}>제보가 접수되었어요</Text>
        <Text style={textStyles.h2}>감사합니다</Text>
        <Image source={icon} style={viewStyles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            title={'돌아가기'}
            onPress={()=> navigation.navigate('MyPage')}/>
    </View>
  );
};

export default ReportPage_2