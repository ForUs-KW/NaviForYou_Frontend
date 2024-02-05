//제보하기 페이지

import React, {useState, setState} from "react";
import { View, Text, TextInput, ScrollView} from "react-native";
import {Dropdown} from 'react-native-element-dropdown';
//https://github.com/hoaphantn7604/react-native-element-dropdown

import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const placeTypeL = [{label: '도로', value: 'load'},{label: '건물', value: 'building'},{label: '지하철역', value: 'station'},{label: '공원', value: 'park'},{label: '기타', value: 'etc'}];
// 이렇게까지 세분화시킬 필요가 있을까요
// const placeTypeLoad = [{label: 'Load1', value: 'load1'},{label: 'Load2', value: 'load2'},{label: 'Load3', value: 'load3'},];
// const placeTypeBuilding = [{label: '학교', value: 'school'},{label: '병원', value: 'hospital'},{label: '기타', value: 'etc'},];
// const placeTypeStation = [{label: '외부', value: 'outside'},{label: '엘리베이터', value: 'elevator'},{label: '장애인 시설', value: 'facility'},];
// const placeTypePlace = [{label: 'place1', value: 'place1'},{label: 'place2', value: 'place2'},{label: 'place3', value: 'place3'},];
const reportType = [{label: 'Item1', value: 'report1'},{label: 'Item2', value: 'report2'},{label: 'Item3', value: 'report3'},];



const ReportPage_1=({navigation})=> {
    //Textinput
    const [location, onChangeLocation] = React.useState('입력해주세요');
    const [content, onChangeContent] = React.useState('입력해주세요');

    //Dropdown
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // const setPlaceType = (value)=>{
    //     switch(value){
    //         case 'load':
    //             return placeTypeLoad;
    //         case 'building':
    //             return placeTypeBuilding;
    //         case 'station':
    //             return placeTypeStation;
    //         case 'place':
    //             return placeTypePlace;
    //     }
    // };


    return (
        <ScrollView>
            <View>
                <CustomButton
                    buttonColor={'(0, 0, 0, 0)'}
                    buttonWidth={'15%'}
                    title={'<'}
                    titleSize={30}
                    onPress={()=> navigation.navigate('MyPage')}/>

                <View>
                    <Text style={textStyles.title1}>제보하기</Text>
                    <Text style={textStyles.content16}>
                        잘못되었거나 추가하고 싶은정보를 제보해주세요!</Text>
                    <Text style={textStyles.content16}> 
                        세바지는 여러분들의 제보와 함께 발전합니다😊 </Text>
                </View>

                <View>
                    <Text style={textStyles.content20}>장소</Text>
                    <View>
                        <Dropdown
                            style={[viewStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                            data={placeTypeL}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'종류'}
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                
                            }}
                        />
                        {/* <Dropdown
                            style={[viewStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                            data={placeTypeStation}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'상세정보'}
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        /> */}
                    </View>
                </View>
            
                <View>
                    <Text style={textStyles.content20}>위치</Text>
                    {/* <View style={viewStyles.tabview}>
                        <CustomButton
                            buttonColor={'skyblue'}
                            buttonWidth={'40%'}
                            title={'위치 입력'}
                            onPress={()=> {alert('위치 입력');}}/>
                        <CustomButton
                            buttonColor={'skyblue'}
                            buttonWidth={'40%'}
                            title={'지도에서 선택'}
                            onPress={()=> {alert('지도에서 선택');}}/>
                    </View> */}

                    <View style={viewStyles.tabview}>
                        <TextInput
                            style={viewStyles.textInput}
                            onChangeText={onChangeLocation}
                            placeholder="위치 검색"/>

                        <CustomButton
                            buttonColor={'skyblue'}
                            buttonWidth={'15%'}
                            title={'지도'}
                            onPress={()=>{alert('지도 띄우기');}}/>
                    </View>

                </View>

                <View>
                    <Text style={textStyles.content20}>제보 내용</Text>
                    <Dropdown
                                style={[viewStyles.dropdown, isFocus && { borderColor: 'blue' }]}
                                data={reportType}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={'제보 종류'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setIsFocus(false);
                                }}
                            />
                    <TextInput
                        style={viewStyles.textInputLarge}
                        onChangeText={onChangeContent}
                        placeholder="제보 내용"/>
                    <Text style={textStyles.rightText}>00/000 Byte</Text>
                </View>

                <View style={viewStyles.centerItems}>
                    <CustomButton
                        buttonColor={'skyblue'}
                        title={'제출하기'}
                        onPress={()=> navigation.navigate('ReportPage_2')}/>
                </View> 
            </View>
        </ScrollView>
    );
};

export default ReportPage_1