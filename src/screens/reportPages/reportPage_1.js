import React from "react";
import { View, Text, TextInput} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const ReportPage_1=({navigation})=> {

  return (
    <View>
        <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={'15%'}
                title={'<'}
                titleSize={30}
                onPress={()=> navigation.navigate('MyPage')}/>

        <Text style={textStyles.title1}>제보하기</Text>
        <Text style={textStyles.content16}>
            잘못되었거나 추가하고 싶은정보를 제보해주세요
            세바지는 여러분들의 제보와 함께 발전합니다😊
        </Text>

        <View>
            <Text style={textStyles.content20}>장소 유형</Text>
            
        </View>
        
        <View>
            <Text style={textStyles.content20}>위치</Text>
            <View style={viewStyles.tabview}>
                <CustomButton
                    buttonColor={'skyblue'}
                    buttonWidth={'40%'}
                    title={'직접입력'}
                    onPress={()=> {alert('직접입력');}}/>
                <CustomButton
                    buttonColor={'skyblue'}
                    buttonWidth={'40%'}
                    title={'도로명주소'}
                    onPress={()=> {alert('도로명주소');}}/>
            </View>


            <TextInput
                style={viewStyles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="위치를 입력해주세요"/>
        </View>
        

        <View>
            <Text style={textStyles.content20}>제보 내용</Text>
            <TextInput
                style={viewStyles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="제보 내용"/>
            <Text style={textStyles.content20}>00/000 Byte</Text>
        </View>

        <CustomButton
            buttonColor={'skyblue'}
            title={'제출하기'}
            onPress={()=> navigation.navigate('ReportPage_2')}/>
        
    </View>
  );
};

export default ReportPage_1