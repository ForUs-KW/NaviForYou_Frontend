import React from "react";
import { View, Text, TextInput} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import styles from '../../style/styles.js';

const loginPage_3 = ({navigation})=> {
  return (
    <View >
        <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={'15%'}
                borderRad={10}
                titleColor={'black'}
                title={'<'}
                onPress={()=> navigation.navigate('loginPage_2')}/>

        <Text style={styles.title}>정보를 입력해주세요</Text>

        <Text style={styles.content}>아이디</Text>
        <View style={styles.tabview}>
            <TextInput
                style={styles.textInputShort}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="아이디를 입력해주세요."
            />
            
            <CustomButton
                buttonColor={'skyblue'}
                buttonWidth={'25%'}
                title={'중복확인'}
                titleColor={'black'}
                titleSize={14}
                onPress={()=> {alert('중복확인');}}/>
        </View>

        <View>
            <Text style={styles.content}>비밀번호</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="비밀번호를 입력해주세요."
            />
            <Text style={styles.content6}>8~20자 이내로 영분 대소문자, 숫자, 특수문자를 모두 사용하여 구성</Text>
        
            <Text style={styles.content}>비밀번호 확인</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="비밀번호를 입력해주세요."
            />
            <Text style={styles.content6}>비밀번호가 일치하지 않습니다</Text>
        </View>
        
        <Text style={styles.content}>닉네임</Text>
        <View style={styles.tabview}>
            <TextInput
                style={styles.textInputShort}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="비밀번호를 입력해주세요."
            />
            <CustomButton
                buttonColor={'skyblue'}
                buttonWidth={'25%'}
                title={'중복확인'}
                titleColor={'black'}
                titleSize={14}
                onPress={()=> {alert('중복확인');}}/>
        </View>

        <CustomButton
            buttonColor={'skyblue'}
            buttonWidth={'80%'}
            title={'회원가입 완료하기'}
            titleColor={'black'}
            titleSize={18}
            onPress={()=> navigation.navigate('loginPage_4')}/>
    </View>
  );
};

export default loginPage_3