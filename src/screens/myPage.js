import React from "react";
import { View, Text } from "react-native";

function myPage() {
  return (
    <View>
      <Button
        title="마이페이지"
        onPress={()=> navigation.navigate('myPage')}
        />
    </View>
  );
}