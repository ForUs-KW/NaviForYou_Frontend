import React from "react";
import { View, Text, TextInput} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const loginPage_3 = ({navigation})=> {
  return (
    <View >
        <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={'15%'}
                title={'<'}
                titleSize={30}
                onPress={()=> navigation.navigate('loginPage_2')}/>

        <Text style={textStyles.title1}>정보를 입력해주세요</Text>

        <Text style={textStyles.content20}>아이디</Text>
        <View style={viewStyles.tabview}>
            <TextInput
                style={viewStyles.textInputShort}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="아이디를 입력해주세요."
            />
            
            <CustomButton
                buttonColor={'skyblue'}
                buttonWidth={'25%'}
                title={'중복확인'}
                titleSize={14}
                onPress={()=> {alert('중복확인');}}/>
        </View>

        <View>
            <Text style={textStyles.content20}>비밀번호</Text>
            <TextInput
                style={viewStyles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="비밀번호를 입력해주세요."
            />
            <Text style={textStyles.content6}>8~20자 이내로 영분 대소문자, 숫자, 특수문자를 모두 사용하여 구성</Text>
        
            <Text style={viewStyles.content}>비밀번호 확인</Text>
            <TextInput
                style={viewStyles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="비밀번호를 입력해주세요."
            />
            <Text style={textStyles.content6}>비밀번호가 일치하지 않습니다</Text>
        </View>
        
        <Text style={textStyles.content20}>닉네임</Text>
        <View style={viewStyles.tabview}>
            <TextInput
                style={viewStyles.textInputShort}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="비밀번호를 입력해주세요."
            />
            <CustomButton
                buttonColor={'skyblue'}
                buttonWidth={'25%'}
                title={'중복확인'}
                titleSize={14}
                onPress={()=> {alert('중복확인');}}/>
        </View>

        <CustomButton
            buttonColor={'skyblue'}
            title={'회원가입 완료하기'}
            onPress={()=> navigation.navigate('loginPage_4')}/>
    </View>
  );
};

export default loginPage_3