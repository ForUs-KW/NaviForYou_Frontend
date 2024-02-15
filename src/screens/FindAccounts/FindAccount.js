/*
아이디 및 비밀번호 찾기 페이지
*/

import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import viewStyles from "../../Style/ViewStyles.js";
import textStyles from '../../Style/TextStyles.js';



const FindAccount=({navigation})=> {

  return (
    <View>
      <View style={[textStyles.title2, { alignItems: 'center' }]}>
        <Text>아이디 및 비밀번호 찾기 페이지</Text>
      </View>


       

        <Button
            title="아이디(이메일) 찾기"
            onPress={() => navigation.navigate('FindEmail')}
        />

        <Button
            title="비밀번호 찾기"
            onPress={() => navigation.navigate('FindPassword')}
        />

   </View>
  );
}

export default FindAccount
