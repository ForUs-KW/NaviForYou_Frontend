import React from "react";
import { View, Text, Image} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';
import exImg from './img/exImg.png';

function loginPage_4() {
  return (
    <View>

        <Text style={styles.title}>세바지와 함께 해주셔서 고마워요</Text>

        <Image source={exImg}/>

        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'시작하기'}
            onPress={()=> {alert('시작하기');}}/>
    </View>
  );
};