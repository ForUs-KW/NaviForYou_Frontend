import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';

function signUpFinishPage() {
  return (
    <View>

        <Text style={styles.title}>세바지와 함께 해주셔서 고마워요</Text>

        

        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'시작하기'}
            onPress={()=> {alert('시작하기');}}/>
    </View>
  );
};