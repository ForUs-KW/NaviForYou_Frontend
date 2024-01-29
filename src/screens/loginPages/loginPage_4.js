import React from "react";
import { View, Text, Image} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../style/styles.js';
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import icon from '../../../assets/icon.png';

const loginPage_4=({navigation})=> {
  return (
    <View style={styles.centerItems}>

        <Text style={styles.title}>세바지와 함께 해주어서 고마워요</Text>
        <Image source={icon} style={styles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            buttonWidth={'85%'}
            title={'시작하기'}
            titleColor={'black'}
            titleSize={20}
            onPress={()=> navigation.navigate('myPage')}/>
    </View>
  );
};

export default loginPage_4