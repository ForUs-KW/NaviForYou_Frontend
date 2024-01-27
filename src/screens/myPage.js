import react from 'react';
import {View, Text} from 'react-native';

import CustomButton from "../component/CustomButton";
import styles from "../styles";

function myPage(){
    return (
        <View>
            <CustomButton
            buttonColor={'skyblue'}
            titleColor={'black'}
            title={'<'}
            onPress={()=> {alert('뒤로가기');}}/>

            <Text style={styles.title}>마이 페이지</Text>

            <Container>
                <Text style={styles.content}
                onPress={() => {alert('로그인/회원가입');}}>&gt; 로그인/회원가입
                </Text>
                <Text style={styles.content}
                onPress={() => {alert('회원 정보 수정');}}>&gt; 회원 정보 수정 머고
                </Text>
                <Text  style={styles.content}
                onPress={() => {alert('앱 설정 관리');}}>&gt; 앱 설정 관리
                </Text>
                <Text  style={styles.content}
                onPress={() => {alert('제보하기');}}>&gt; 제보하기
                </Text>
            </Container>
    
        </View>
    );
};