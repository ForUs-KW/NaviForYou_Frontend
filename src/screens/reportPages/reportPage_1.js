import React from "react";
import { View, Text, TextInput} from "react-native";

//import BackBtn from "../../component/backBtn.js";
import CustomButton from "../../component/CustomButton.js";
import styles from '../../style/styles.js';

const reportPage_1=({navigation})=> {
  return (
    <View>
        <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={'15%'}
                borderRad={10}
                titleColor={'black'}
                title={'<'}
                onPress={()=> navigation.navigate('myPage')}/>

        <Text style={styles.title}>제보하기</Text>
        <Text style={styles.content16}>
            잘못되었거나 추가하고 싶은정보를 제보해주세요
            세바지는 여러분들의 제보와 함께 발전합니다😊
        </Text>

        <View>
            <Text style={styles.content}>장소 유형</Text>
        </View>
        
        <View>
            <Text style={styles.content}>위치</Text>
            <View style={styles.tabview}>
                <CustomButton
                    buttonColor={'skyblue'}
                    buttonWidth={'40%'}
                    title={'직접입력'}
                    titleColor={'black'}
                    titleSize={18}
                    onPress={()=> {alert('직접입력');}}/>
                <CustomButton
                    buttonColor={'skyblue'}
                    buttonWidth={'40%'}
                    title={'도로명주소'}
                    titleColor={'black'}
                    titleSize={18}
                    onPress={()=> {alert('도로명주소');}}/>
            </View>
            <TextInput
                style={styles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="위치를 입력해주세요"/>
        </View>
        

        <View>
            <Text style={styles.content}>제보 내용</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text)=>{this.setState({inputText: text})}}
                placeholder="제보 내용"/>
            <Text style={styles.content}>00/000 Byte</Text>
        </View>

        <CustomButton
            buttonColor={'skyblue'}
            buttonWidth={'80%'}
            title={'제출하기'}
            titleColor={'black'}
            titleSize={18}
            onPress={()=> navigation.navigate('reportPage_2')}/>
        
    </View>
  );
};

export default reportPage_1