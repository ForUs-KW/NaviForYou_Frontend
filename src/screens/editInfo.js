import React from "react";
import { View, Text, Button } from "react-native";

const EditInfo=({navigation})=> {
  return (
    <View>
      <Button
        title="회원 정보 수정"
        onPress={()=> navigation.navigate('myPage')}
        />
    </View>
  );
}

export default EditInfo