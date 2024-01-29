import React from "react";
import { View, Text, Button } from "react-native";

const settings=({navigation})=> {
  return (
    <View>
      <Button
        title="앱 설정 관리"
        onPress={()=> navigation.navigate('myPage')}
        />
    </View>
  );
}

export default settings