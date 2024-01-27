import React from "react";
import { View, Text} from "react-native";

import CustomButton from "../component/CustomButton.js";
import styles from '../styles.js';

function loginPage() {
  return (
    <View>
        <CustomButton
        buttonColor={'skyblue'}
        titleColor={'black'}
        title={'<'}
        onPress={()=> {alert('뒤로가기');}}/>

    <Text style={styles.title}>로그인</Text>

    </View>
  );
};
