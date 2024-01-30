import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../style/styles.js';

const loginPage_2=({navigation})=> {
  return (
    <View>
        <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={'15%'}
                borderRad={10}
                titleColor={'black'}
                title={'<'}
                onPress={()=> navigation.navigate('loginPage_1')}/>

        <Text style={styles.title}>회원가입을 시작합니다</Text>

        <View style={styles.tabview}>
            <CustomButton
                buttonColor={'skyblue'}
                borderRad={50}
                titleColor={'black'}
                title={'*'}
                onPress={()=> {alert('약관1');}}/>
            <Text style={styles.content}
                onPress={() => {alert('로그인/회원가입');}}>필수 약관  &gt;
            </Text>
        </View>

        <View style={styles.tabview}>
            <CustomButton
                buttonColor={'skyblue'}
                borderRad={50}
                titleColor={'black'}
                title={'*'}
                onPress={()=> {alert('약관1');}}/>
            <Text style={styles.content}
                onPress={() => {alert('로그인/회원가입');}}>필수 약관  &gt;
            </Text>
        </View>

        <View style={styles.tabview}>
            <CustomButton
                buttonColor={'skyblue'}
                borderRad={50}
                titleColor={'black'}
                title={'*'}
                onPress={()=> {alert('약관1');}}/>
            <Text style={styles.content}
                onPress={() => {alert('로그인/회원가입');}}>선택 약관  &gt;
            </Text>
        </View>

        <View style={styles.tabview}>
            <CustomButton
                buttonColor={'skyblue'}
                borderRad={50}
                titleColor={'black'}
                title={'*'}
                onPress={()=> {alert('약관1');}}/>
            <Text style={styles.content}
                onPress={() => {alert('로그인/회원가입');}}>선택 약관  &gt;
            </Text>
        </View>

        <View style={styles.tabview}>
            <CustomButton
                buttonColor={'skyblue'}
                borderRad={50}
                titleColor={'black'}
                title={'*'}
                onPress={()=> {alert('약관1');}}/>
            <Text style={styles.content}
                onPress={() => {alert('로그인/회원가입');}}>선택 약관  &gt;
            </Text>
        </View>
        
        <CustomButton
                buttonColor={'skyblue'}
                buttonWidth={'20%'}
                title={'다음'}
                titleColor={'black'}
                titleSize={20}
                onPress={()=> navigation.navigate('loginPage_3')}/>
    </View>
  );
};

export default loginPage_2