import React from "react";
import {View, Text} from "react-native";


const HorizonLine = ({ text }) => {
  return (
    <View
      style={{
        width: "100%",
        textAlign: "center",
        lineHeight: 1,
        margin: 10,
      }}
    >
      <Text style={{padding: 10 }}>{text}</Text>
    </View>
  );
};

export default HorizonLine;