import React from "react";
import {View, Text} from "react-native";


const HorizonLine = ({ text }) => {
  return (
    <View
      style={{
        width: "100%",
        textAlign: "center",
       // borderBottom: "1px solid #aa",
        lineHeight: 1,
        margin: 20,
      }}
    >
      <Text style={{padding: 10 }}>{text}</Text>
    </View>
  );
};

export default HorizonLine;