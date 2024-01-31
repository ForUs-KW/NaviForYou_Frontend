import React from "react";
import { View, Text, TextInput, ScrollView} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const LoginPage_3 = ({navigation})=> {
  return (
    <View >
        <ScrollView>
            
            <CustomButton
                    buttonColor={'(0, 0, 0, 0)'}
                    buttonWidth={'15%'}
                    title={'<'}
                    titleSize={30}
                    onPress={()=> navigation.navigate('LoginPage_2')}/>

            <Text style={textStyles.title2}>정보를 입력해주세요</Text>

            <Text style={textStyles.content20}>아이디</Text>
            <View style={viewStyles.tabview}>
                <TextInput
                    style={viewStyles.textInputShort}
                    onChangeText={(text)=>{this.setState({inputText: text})}}
                    placeholder="아이디를 입력해주세요."
                />

                <CustomButton
                    buttonColor={'lightgrey'}
                    buttonWidth={'25%'}
                    title={'중복확인'}
                    titleSize={14}
                    onPress={()=> {alert('중복확인');}}/>
            </View>

            
            <View>
                <Text style={textStyles.content20}>비밀번호</Text>
                <View style={viewStyles.centerItems}>
                <TextInput
                    style={viewStyles.textInput}
                    onChangeText={(text)=>{this.setState({inputText: text})}}
                    placeholder="비밀번호를 입력해주세요."
                />
                </View>
                <Text style={textStyles.content6}>8~20자 이내로 영분 대소문자, 숫자, 특수문자를 모두 사용하여 구성</Text>
            

                <Text style={textStyles.content20}>비밀번호 확인</Text>
                <View style={viewStyles.centerItems}>
                    <TextInput
                        style={viewStyles.textInput}
                        onChangeText={(text)=>{this.setState({inputText: text})}}
                        placeholder="비밀번호를 입력해주세요."
                    />

                </View>
                <Text style={textStyles.content6}>비밀번호가 일치하지 않습니다</Text>
            </View>
            
            <Text style={textStyles.content20}>닉네임</Text>
            <View style={viewStyles.tabview}>
                <TextInput
                    style={viewStyles.textInputShort}
                    onChangeText={(text)=>{this.setState({inputText: text})}}
                    placeholder="닉네임을 입력해주세요."
                />
                <CustomButton
                    buttonColor={'lightgrey'}
                    buttonWidth={'25%'}
                    title={'중복확인'}
                    titleSize={14}
                    onPress={()=> {alert('중복확인');}}/>
            </View>

            <View style={viewStyles.centerItems}>
                <CustomButton
                    buttonColor={'lightgrey'}
                    title={'회원가입 완료하기'}
                    onPress={()=> navigation.navigate('LoginPage_4')}/>
            </View>
        </ScrollView>
    </View>
  );
};

export default LoginPage_3