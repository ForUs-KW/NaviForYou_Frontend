import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../style/styles.js';

const reportPage_2=({navigation})=> {
  return (
    <View>

        <Text style={styles.title}>제보가 접수되었습니다 감사합니다</Text>

        

        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'확인'}
            onPress={()=> navigation.navigate('myPage')}/>
    </View>
  );
};

export default reportPage_2