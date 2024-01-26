import React from "react";
import { View, Text } from "react-native";

function settings() {
  return (
    <View>
      <Button
        title="제보하기"
        onPress={()=> navigation.navigate('myPage')}
        />
    </View>
  );
}