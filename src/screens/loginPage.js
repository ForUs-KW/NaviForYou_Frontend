import React from "react";
import { View, Text, Button } from "react-native";

function loginPage() {
  return (
    <View>
        <CustomButton
        buttonColor={'skyblue'}
        titleColor={'black'}
        title={'<'}
        onPress={()=> {alert('뒤로가기');}}/>

    <Text style={styles.title}>마이 페이지</Text>





    </View>
  );
}