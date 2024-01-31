//약관동의

import React, {useState, useEffect} from "react";
import { View, Text} from "react-native";
//import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const LoginPage_2=({navigation})=> {
    const [allCheck, setAllCheck] = useState(false);
    const [item1, setItem1Check] = useState(false);
    const [item2, setItem2Check] = useState(false);
    const [item3, setItem3Check] = useState(false);
    
    const allBtnEvent =()=>{
        if(allCheck===false){
            setAllCheck(true);
            setItem1Check(true);
            setItem2Check(true);
            setItem3Check(true);
        }else{
            setAllCheck(false);
            setItem1Check(false);
            setItem2Check(false);
            setItem3Check(false);
        }
    };

    const item1BtnEvent=()=>{item1===true ? setItem1Check(false) : setItem1Check(true)};
    const item2BtnEvent=()=>{item2===true ? setItem2Check(false) : setItem2Check(true)};
    const item3BtnEvent=()=>{item3===true ? setItem3Check(false) : setItem3Check(true)};

    useEffect(()=>{
        item1===true && item2===true && item3===true ?
        setAllCheck(true) : setAllCheck(false)
    }, [item1, item2, item3])

  return (
    <View>
        <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={'15%'}
                title={'<'}
                titleSize={30}
                onPress={()=> navigation.navigate('LoginPage_1')}/>

        <Text style={textStyles.title2}>약관 동의</Text>


        <View>
            <BouncyCheckbox 
                style={{marginLeft:30, marginBottom:20}}
                isChecked={allCheck}
                text="전체 동의"
                onPress={allBtnEvent}/>
            <BouncyCheckbox 
                style={{marginLeft:30, marginBottom:20}}
                isChecked={item1}
                text="1번 항목"
                onPress={item1BtnEvent}/>
            <BouncyCheckbox 
                style={{marginLeft:30, marginBottom:20}}
                isChecked={item2}
                text="2번 항목"
                onPress={item2BtnEvent}/>
            <BouncyCheckbox 
                style={{marginLeft:30, marginBottom:20}}
                isChecked={item3}
                text="3번 항목"
                onPress={item3BtnEvent}/>
        </View>

        <View style={viewStyles.centerItems}>
            <CustomButton
                    buttonColor={'lightgrey'}
                    title={'다음'}
                    onPress={()=> navigation.navigate('LoginPage_3')}/>
        </View>
    </View>
  );
};

export default LoginPage_2