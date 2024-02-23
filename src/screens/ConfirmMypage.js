import React, {useState, useEffect} from "react";
import { View, Text, Image} from "react-native";

import { getUserData, removeUserData } from "../auth.js";

import CustomButton from "../component/CustomButton.js";
import viewStyles from "../Style/ViewStyles.js";
import textStyles from "../Style/TextStyles.js";
import icon from '../../assets/icon.png';
import { TextInput } from "react-native-gesture-handler";


const ConfirmMypage=({navigation})=> {

    

    const [userData, setUserData] = useState(null);
    const [pwd, setPassword] = useState("");

     //비밀번호 확인
    const checkPassword = async() => {
        try {


            //console.log({token});
            //console.log({password});

            const response = await fetch ("http://3.34.118.226:8080/app/myPage",
                {
                    method : "POST",
                    //mode: "no-cors",
                    credentials : "include",
                    headers : {
                    "Content-Type" : "application/json",
                    },
                    body : JSON.stringify({pwd}),

                },  
            );

            

        //wait for the response 
            const data = await response.json();
            console.log (data)

            if (data.is_success) {
                console.log(data.message);
            } else {
                console.log(data.code+ " || " + data.message);
            }
        } catch (error) {
        console.error("로그인 에러", error);
        }
    };

  return (
    <View style={viewStyles.centerItems}>
        <Text style={textStyles.title2}></Text>
        <Text style={textStyles.title2}></Text>
        <Text style={textStyles.title2}>{userData ? `${userData.userId}님` : ""} 마이페이지 진입을 위한 비밀번호 확인</Text>
        

        <Text style={textStyles.content20}>비밀번호 입력(아래에 눌러보면 있음)</Text>

        <TextInput
            value={pwd}
            onChangeText={(text) => setPassword(text)}
            inputStyle={viewStyles.textInput} // inputStyle prop을 사용하여 스타일을 지정합니다
        /> 

        <CustomButton
                    buttonColor={'skyblue'}
                    title={'비밀번호 확인 '}
                    onPress={()=> checkPassword()}
        />
    </View>
  );
};

export default ConfirmMypage