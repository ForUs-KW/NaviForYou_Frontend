import React, {useState, useEffect} from "react";
import { View, Text, Image} from "react-native";

import { getUserData, removeUserData } from "../../auth.js";

import CustomButton from "../../component/CustomButton.js";
import viewStyles from "../../Style/ViewStyles.js";
import textStyles from '../../Style/TextStyles.js';
import icon from '../../../assets/icon.png';
import { TextInput } from "react-native-gesture-handler";


const LoginSucceed=({navigation})=> {

    

    const [userData, setUserData] = useState(null);
    const [pwd, setPassword] = useState("");

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

     // [회원 탈퇴] CORS 에러 있음, 수정 필요
    const deleteAccount = async() => {
        try {
            // request Login
            const userData = await getUserData();
            const token = userData.token;

            if (!userData) {
                console.error("User data not found.");
                return;
            }
            

            console.log({token});
            console.log({pwd});

            const response = await fetch ("http://3.34.118.226:8080/app/myPage/delete",
                {
                    method : "POST",
                    //mode: "no-cors",
                    credentials : "include",
                    headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `${token}`,
                    },
                    body : JSON.stringify({pwd}),

                },  
            );

            

        //wait for the response 
            const data = await response.json();

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
        <Text style={textStyles.title2}>{userData ? `${userData.userId}님` : ""} 세바지에 온 걸 환영해요</Text>
        <Image source={icon} style={viewStyles.image}/>
        <CustomButton
            buttonColor={'skyblue'}
            title={'시작하기'}
            onPress={()=> navigation.navigate('MyPage')}/>

        <CustomButton
            buttonColor={'skyblue'}
            title={'로그아웃'}
            onPress={()=> removeUserData()}/>

        <TextInput
            value={pwd}
            onChangeText={(text) => setPassword(text)}
            //inputStyle={viewStyles.textInput} // inputStyle prop을 사용하여 스타일을 지정합니다
        /> 



        <CustomButton
            style={viewStyles.textInput}
            buttonColor={'skyblue'}
            title={'회원탈퇴'}
            onPress={()=> deleteAccount()}
        />

        <CustomButton
                    style={viewStyles.textInput}
                    buttonColor={'skyblue'}
                    title={'마이페이지(로그인 된 상태)'}
                    onPress={()=> navigation.navigate('ConfirmMypage')}
        />
    </View>
  );
};

export default LoginSucceed