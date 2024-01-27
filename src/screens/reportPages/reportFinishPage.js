import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';

function reportFinishPage() {
  return (
    <View>

        <Text style={styles.title}>제보가 접수되었습니다 감사합니다</Text>

        

        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'확인'}
            onPress={()=> {alert('확인');}}/>
    </View>
  );
};