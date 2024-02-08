// 세바지 회원가입 페이지

import React , {useState} from "react";
import { View, Text, TextInput, ScrollView, Alert} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const LoginPage_3 = ({navigation})=> {
    // const [ID, onChangeID] = React.useState('입력');
    // const [PW, onChangePW] = React.useState('입력');
    // const [checkPW, onChangeCheckPW] = React.useState('입력');
    // const [nickName, onChangeNickName] = React.useState('입력');

    //이름, 전화번호, 이메일, 비밀번호, 비밀번호 확인
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPW, setCheckPW] = useState('');

    

    const handleSignUp = async () => {
        try {
          const response = await fetch('http://3.34.118.226:8080/app/member/signUp', // 서버 주소 확인 필요 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              nickname,
              phone,
              email,
              password,
            }),
            //mode: 'no-cors' 
          });
    
          if (response.ok) {
            const data = await response.json();
            // 회원가입 성공 메시지 출력
            Alert.alert('회원가입 성공',`'${data.message}'`);
          } else {
            // 회원가입 실패 메시지 출력
            Alert.alert('회원가입 실패', '서버 오류로 회원가입에 실패했습니다.');
          }
        } catch (error) {
          console.error('회원가입 중 에러:', 'error');
          Alert.alert('회원가입 실패', '네트워크 오류로 회원가입에 실패했습니다.');
        }
    };

    const emailDoubleCheck = async () => {
        try {
            // 사용자가 입력한 이메일 주소 가져오기
            const userEmail = email;
    
            // 서버에 이메일 중복 확인을 위한 요청 보내기
            const response = await fetch(`http://3.34.118.226:8080/app/member/emailDuplicate?email=${email}`, {
                method: 'GET', // 이메일 중복 확인을 위한 HTTP 메서드 설정
                headers: {
                    'Content-Type': 'application/json',
                },

            });
    
            // 서버 응답 확인
            if (response.status === 200) {
                const data = await response.json();
                if (data.result) {
                    Alert.alert('사용 가능한 이메일입니다.');
                } else {
                    Alert.alert('이미 사용 중인 이메일입니다.');
                }
            } else {
                console.error('이메일 중복 확인 요청 실패:', response.statusText);
                Alert.alert('이메일 중복 확인에 실패했습니다.');
            }
        } catch (error) {
            console.error('이메일 중복 확인 중 에러:', error);
            Alert.alert('이메일 중복 확인에 실패했습니다.');
        }
    };


    const nicknameDoubleCheck = async () => {
        try {
            // 사용자가 입력한 닉네임 가져오기
            const userNickname = nickname;
    
            // 서버에 닉네임 중복 확인을 위한 요청 보내기
            const response = await fetch(`http://3.34.118.226:8080/app/member/nicknameDuplicate?nickname=${nickname}`, {
                method: 'GET', // 닉네임 중복 확인을 위한 HTTP 메서드 설정
                headers: {
                    'Content-Type': 'application/json',
                },

            });
    
            // 서버 응답 확인
            if (response.status === 200) {
                const data = await response.json();
                if (data.result) {
                    Alert.alert('사용 가능한 닉네임입니다.');
                } else {
                    Alert.alert('이미 사용 중인 닉네임입니다.');
                }
            } else {
                console.error('닉네임 중복 확인 요청 실패:', response.statusText);
                Alert.alert('닉네임 중복 확인에 실패했습니다.');
            }
        } catch (error) {
            console.error('닉네임 중복 확인 중 에러:', error);
            Alert.alert('닉네임 중복 확인에 실패했습니다.');
        }
    };

    const sendCodeEmail = async () => {
        try {
            // 사용자가 입력한 이메일 가져오기
            const userEmail = email;
    
            // 서버에 사용자가 입력한 이메일 주소로 코드 보내달라고 요청 
            const response = await fetch(`http://3.34.118.226:8080/app/member/sendEmailCode/?email=${email}`, {
                method: 'GET', // HTTP 메서드 
                headers: {
                    'Content-Type': 'application/json',
                },

            });
    
            // 서버 응답 확인
            if (response.ok) {
                Alert.alert('이메일 코드 전송 성공', '이메일 코드를 성공적으로 전송했습니다.');
            } else {
                Alert.alert('이메일 코드 전송 실패', '서버 오류로 인해 이메일 코드 전송에 실패했습니다. ');
            }
        } catch (error) {
            console.error('이메일 코드 전송 중 에러:', error);
            Alert.alert('이메일 코드 전송에 실패했습니다.');
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

                <Text style={textStyles.content20}>이메일</Text>
                <View style={viewStyles.tabview}>
                    <TextInput
                        style={viewStyles.textInputShort}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="아이디(이메일)를 입력해주세요."
                        

                    />

                    <CustomButton
                        buttonColor={'lightgrey'}
                        buttonWidth={'25%'}
                        title={'중복확인'}
                        titleSize={14}
                        onPress={()=> emailDoubleCheck() }/>
                    
                    <CustomButton
                        buttonColor={'lightgrey'}
                        buttonWidth={'25%'}
                        title={'인증번호 발송'}
                        titleSize={14}
                        onPress={()=> sendCodeEmail() }/>
                </View>

                <Text style={textStyles.content20}>폰번호</Text>
                <View style={viewStyles.tabview}>
                    <TextInput
                        style={viewStyles.textInputShort}
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="핸드폰 번호를 입력해주세요 (- 제외) "
                        

                    />
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
                        rules={{
                            required: true,
                            pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
                        }}
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
                        onPress={()=> nicknameDoubleCheck() }/>
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