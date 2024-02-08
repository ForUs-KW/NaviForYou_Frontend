// 세바지 회원가입 페이지

import React from "react";
import { View, Text, TextInput, ScrollView} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";
import validationRules from "../../utils/validationRules.js";

const LoginPage_3 = ({navigation})=> {
    const [ID, onChangeID] = React.useState('입력');
    const [PW, onChangePW] = React.useState('입력');
    const [checkPW, onChangeCheckPW] = React.useState('입력');
    const [nickName, onChangeNickName] = React.useState('입력');
    const [form, setForm] = useState({
        email:{
            value:'',
            type:'textInput',
            rules:{
                isRequired: true,
                isEmail: true,
            },
            valid:false,
        },
        password:{
            value:'',
            type:'textInput',
            rules:{
                isRequired:true,
                minLength:8,
                maxLength:20,
            },
            valid: false,
        },
        confirmPassword:{
            value:'',
            type:'textInput',
            rules:{
                confirmPassword: 'password',
            },
            valid:false,
        },
    });

    updateInput=(id, value)=>{
        setHasErrors(false);
        let formCopy = form;
        formCopy[id].value=value;
        let rules = formCopy[id].rules;
        let valid = validationRules(value, rules, formCopy);
        formCopy[id].valid = valid;
        setForm(form=>{return {...formCopy};});
        console.warn(form);
    };

    confirmPassword = () =>{
        return type !='로그인'?(
            <Input
                value={form.confirmPassword.value}
                type={form.confirmPassword.type}
                secureTextEntry={true}
                placeholder="비밀번호를 다시 입력해주세요"
                placeholderTextColor={'#ddd'}
                onChangeText={value=>updateInput('confirmPassword', value)}
            />
        ):null;
    };

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
                        onChangeText={this.onChangeID}
                        placeholder="아이디를 입력해주세요."
                    />

                    {/* <Input
                        value={form.email.value}
                        type={form.email.type}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                        placeholder="이메일 주소를 입력해주세요"
                        placeholderTextColor={'#ddd'}
                        onChangeText={value=>updateInput('email', value)}
                    /> */}
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
                        placeholder="비밀번호를 입력해주세요."
                        secureTextEntry={true}
                        onChangeText={this.onChangePW}
                    />
                    {/* <Input
                        value={form.password.value}
                        type={form.password.type}
                        secureTextEntry={true}
                        placeholder="비밀번호를 입력해주세요."
                        placeholderTextColor={'#ddd'}
                        onChangeText={value=>updateInput('password', value)}
                    /> */}
                    {confirmPassword()}
                    {formHasErrors()}


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
            </ScrollView>
        </View>
    );
};

export default LoginPage_3