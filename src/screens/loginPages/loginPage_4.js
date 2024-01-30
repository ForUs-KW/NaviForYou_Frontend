import React from "react";
import { View, Text, Image} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import icon from '../../../assets/icon.png';

const loginPage_4=({navigation})=> {
  return (
    <View style={styles.centerItems}>

        <Text style={textStyles.title1}>세바지와 함께 해주어서 고마워요</Text>
        <Image source={icon} style={viewStyles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            title={'시작하기'}
            onPress={()=> navigation.navigate('myPage')}/>
    </View>
  );
};

export default loginPage_4