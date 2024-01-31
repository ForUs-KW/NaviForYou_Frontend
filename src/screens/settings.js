import React from "react";
import { View, Text, Button } from "react-native";

const Settings=({navigation})=> {
  return (
    <View>
      <Button
        title="앱 설정 관리"
        onPress={()=> navigation.navigate('MyPage')}
        />
    </View>
  );
}

export default Settings