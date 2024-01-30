import React from "react";
import { View, Text, Image} from "react-native";


import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";
import icon from '../../../assets/icon.png';

const reportPage_2=({navigation})=> {
  return (
    <View style={viewStyles.centerItems}>

        <Text style={textStyles.title1}>제보가 접수되었습니다. 감사합니다.</Text>
        <Image source={icon} style={viewStyles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            title={'확인'}
            onPress={()=> navigation.navigate('myPage')}/>
    </View>
  );
};

export default reportPage_2