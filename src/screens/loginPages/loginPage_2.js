import React from "react";
import { View, Text, TextInput} from "react-native";

import CustomButton from "../../component/CustomButton.js";
import styles from '../../styles.js';

function loginPage_2() {
  return (
    <View>
        <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'<'}
            onPress={()=> {alert('뒤로가기');}}/>

        <Text style={styles.title}>회원가입을 시작합니다</Text>

        <View>
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

        <View>
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

        <View>
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

        <View>
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

        <View>
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
                titleColor={'black'}
                title={'다음'}
                onPress={()=> {alert('다음');}}/>
    </View>
  );
};
