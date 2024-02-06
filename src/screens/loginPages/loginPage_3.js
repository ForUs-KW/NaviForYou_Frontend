// 세바지 회원가입 페이지

import React , {useState} from "react";
import { View, Text, TextInput, ScrollView} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const LoginPage_3 = ({navigation})=> {
    // const [ID, onChangeID] = React.useState('입력');
    // const [PW, onChangePW] = React.useState('입력');
    // const [checkPW, onChangeCheckPW] = React.useState('입력');
    // const [nickName, onChangeNickName] = React.useState('입력');

    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPW, setCheckPW] = useState('');

    const handleSignUp = async () => {
        try {
          const response = await fetch('/app/member/signUp', // 서버 주소 확인 필요 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nickname,
              phone,
              email,
              password,
            }),
          });
    
          if (response.ok) {
            const data = await response.json();
            // 회원가입 성공 메시지 출력
            Alert.alert('회원가입 성공', data.message);
          } else {
            // 회원가입 실패 메시지 출력
            Alert.alert('회원가입 실패', '서버 오류로 회원가입에 실패했습니다.');
          }
        } catch (error) {
          console.error('회원가입 중 에러:', error);
          Alert.alert('회원가입 실패', '네트워크 오류로 회원가입에 실패했습니다.');
        }
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
                        value={nickname}
                        onChangeText={setNickname}
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
                        value={password}
                        onChangeText={setPassword}
                        placeholder="비밀번호를 입력해주세요."
                        secureTextEntry={true}
                    />
                    </View>
                    <Text style={textStyles.content6}>8~20자 이내로 영분 대소문자, 숫자, 특수문자를 모두 사용하여 구성</Text>
                

                    <Text style={textStyles.content20}>비밀번호 확인</Text>
                    <View style={viewStyles.centerItems}>
                        <TextInput
                            style={viewStyles.textInput}
                            value={checkPW}
                            onChangeText={setCheckPW}
                            placeholder="비밀번호를 입력해주세요."
                            secureTextEntry={true}
                        />

                    </View>
                    
                </View>
                
                <Text style={textStyles.content20}>닉네임</Text>
                <View style={viewStyles.tabview}>
                    <TextInput
                        style={viewStyles.textInputShort}
                        value={nickname}
                        onChangeText={setNickname}
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
                        onPress={()=> {
                            handleSignUp();
                            navigation.navigate('LoginPage_4');
                        }
                    }/>
                </View>
            </ScrollView>
        </View>
    );
};

export default LoginPage_3