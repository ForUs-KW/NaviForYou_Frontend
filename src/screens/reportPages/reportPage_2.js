import React from "react";
import { View, Text, Image} from "react-native";


import CustomButton from "../../component/CustomButton.js";
import styles from '../../style/styles.js';
import icon from '../../../assets/icon.png';

const reportPage_2=({navigation})=> {
  return (
    <View style={styles.centerItems}>

        <Text style={styles.title}>제보가 접수되었습니다. 감사합니다.</Text>
        <Image source={icon} style={styles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            buttonWidth={'85%'}
            title={'확인'}
            titleColor={'black'}
            titleSize={20}
            onPress={()=> navigation.navigate('myPage')}/>
    </View>
  );
};

export default reportPage_2