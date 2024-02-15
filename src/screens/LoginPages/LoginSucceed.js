import React, {useState, useEffect} from "react";
import { View, Text, Image} from "react-native";

import { getUserData } from "../../auth.js";

import CustomButton from "../../component/CustomButton.js";
import viewStyles from "../../Style/ViewStyles.js";
import textStyles from '../../Style/TextStyles.js';
import icon from '../../../assets/icon.png';


const LoginSucceed=({navigation})=> {

    const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={viewStyles.centerItems}>
        <Text style={textStyles.title2}></Text>
        <Text style={textStyles.title2}></Text>
        <Text style={textStyles.title2}>{userData ? `${userData.userId}님` : ""} 세바지에 온 걸 환영해요</Text>
        <Image source={icon} style={viewStyles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            title={'시작하기'}
            onPress={()=> navigation.navigate('MyPage')}/>
    </View>
  );
};

export default LoginSucceed