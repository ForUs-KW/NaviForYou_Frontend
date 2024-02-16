// Contour.js
//내용: 구분선. 나중에 필요하다면 문구를 입력받아서 사용가능하게 수정할 수 있음

import React from 'react';
import { View, Text } from 'react-native';

const Contour = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1, height: 1.5, backgroundColor: 'grey' }} />
      <Text style={{ margin: 20, fontSize: 20 }}>또는</Text>
      <View style={{ flex: 1, height: 1.5, backgroundColor: 'grey' }} />
    </View>
  );
};

export default Contour;