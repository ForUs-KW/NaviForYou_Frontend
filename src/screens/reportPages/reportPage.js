import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';

function reportPage() {
  return (
    <View>
        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'<'}
            onPress={()=> {alert('뒤로가기');}}/>

        <Text style={styles.title}>제보하기</Text>
        <Text style={styles.content}>
            잘못되었거나 추가하고 싶은정보를 제보해주세요
            세바지는 여러분들의 제보와 함께 발전합니다😊
        </Text>

        <View>
            <Text style={styles.content}>장소 유형</Text>
        </View>
        
        <View>
            <Text style={styles.content}>위치</Text>
            <CustomButton
                buttonColor={'skyblue'}
                titleColor={'black'}
                title={'직접입력'}
                onPress={()=> {alert('직접입력');}}/>
            <CustomButton
                buttonColor={'skyblue'}
                titleColor={'black'}
                title={'도로명주소'}
                onPress={()=> {alert('도로명주소');}}/>
        </View>
        

        <View>
            <Text style={styles.content}>제보 내용</Text>

        </View>

        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'제출하기'}
            onPress={()=> {alert('제출하기');}}/>
        
    </View>
  );
};