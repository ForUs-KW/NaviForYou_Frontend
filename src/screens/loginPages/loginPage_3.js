import React from "react";
import { View, Text, TextInput, ScrollView} from "react-native";

import CustomButton from "../../component/CustomButton";
import viewStyles from "../../style/viewStyles";
import textStyles from "../../style/textStyles";


const LoginPage_3=({navigation})=>{
    return(
        <ScrollView>
            <View>
                <CustomButton
                        buttonColor={'(0, 0, 0, 0)'}
                        buttonWidth={'15%'}
                        title={'<'}
                        titleSize={30}
                        onPress={()=> navigation.navigate('LoginPage_2')}/>
                <Text style={textStyles.title2}>정보 입력</Text>
            
                <View style={viewStyles.tabview}>
                    <TextInput
                        style={viewStyles.textInputShort}
                        onChangeText={this.onChangeID}
                        placeholder="이메일 주소를 입력해주세요."
                    />
                    <CustomButton
                        buttonColor={'lightgrey'}
                        buttonWidth={'25%'}
                        title={'중복확인'}
                        titleSize={14}
                        onPress={()=> {alert('가입 가능한 메일 주소입니다');}}/>
                </View>
            
            
                <View>
                    <Text style={textStyles.content20}>비밀번호</Text>
                    <View style={viewStyles.centerItems}>
                    <TextInput
                        style={viewStyles.textInput}
                        placeholder="비밀번호를 입력해주세요."
                        secureTextEntry={true}
                        onChangeText={this.onChangePW}
                    />


                    </View>
                    <Text style={textStyles.content6}>8~20자 이내로 영문 대소문자, 숫자 조합</Text>
                

                    <Text style={textStyles.content20}>비밀번호 확인</Text>
                    <View style={viewStyles.centerItems}>
                        <TextInput
                            style={viewStyles.textInput}
                            onChangeText={this.onChangeCheckPW}
                            placeholder="비밀번호를 입력해주세요."
                            secureTextEntry={true}
                        />

                    </View>
                </View>


                <Text style={textStyles.content20}>닉네임</Text>
                <View style={viewStyles.tabview}>
                    <TextInput
                        style={viewStyles.textInputShort}
                        onChangeText={this.onChangeNickName}
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
            </View>
        </ScrollView>
    );
};

export default LoginPage_3