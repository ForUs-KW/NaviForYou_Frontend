//제보하기 페이지

import React, {useState, setState} from "react";
import { View, Text, TextInput, ScrollView} from "react-native";
import {Dropdown} from 'react-native-element-dropdown';
//https://github.com/hoaphantn7604/react-native-element-dropdown

import BackBtn from "../../component/BackBtn";
import SideBtn from "../../component/SideBtn.js";
import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../style/viewStyles.js';
import textStyles from "../../style/textStyles.js";

const placeType = [
    {label: '건물', value: 'building'},
    {label: '도로', value: 'load'},
    {label: '지하철역', value: 'station'},
    {label: '기타1', value: 'idk1'},
    {label: '기타', value: 'etc'}];

const placeSubcategories = {
    building: [{label: '학교', value: 'school'},{label:'병원', value:'hospital'}],
    load:[{label:'횡단보도',value:'crosswalk'},{label:'인도',value:'sidewalk'},{label:'차도', value: 'driveway'}],
    station:[{label:'뭐하지1', value:'idk1'},{label:'뭐하지2', value:'idk2'},{label:'뭐하지3', value:'idk3'},],
    idk1:[{label:'뭐하지1', value:'idk1'},{label:'뭐하지2', value:'idk2'},{label:'뭐하지3', value:'idk3'},],
    etc:[{label:'뭐하지1', value:'idk1'},{label:'뭐하지2', value:'idk2'},{label:'뭐하지3', value:'idk3'},],
};

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
    const [placeTypeValue, setPlaceTypeValue] = React.useState(null);
    const [subCategoryValue, setSubCategoryValue]=React.useState(null);
    const [reportTypeValue, setReportTypeValue] = React.useState(null);

    return (
        <ScrollView style={{flex:1}} keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}}>
            <View>
                <BackBtn onPress={()=> navigation.navigate('MyPage')}/>

                <View>
                    <Text style={textStyles.h1}>제보하기</Text>
                    <Text style={textStyles.b16}>
                        잘못되었거나 추가하고 싶은정보를 제보해주세요!{'\n'}세바지는 여러분들의 제보와 함께 발전합니다😊</Text>
                </View>
                <View style={viewStyles.centerAlign}>
                    <Text style={textStyles.b18}>장소</Text>
                </View>
                <View style={viewStyles.horizontalAlign}>
                    <Dropdown
                        style={[viewStyles.dropdown, placeTypeValue]}
                        data={placeType}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'대분류'}
                        value={placeTypeValue}
                        onFocus={() => setReportTypeValue(null)} //Unselect report dropdown
                        onBlur={() => {
                            setSubCategoryValue(null);
                            setReportTypeValue(null);
                        }}
                        onChange={item => {
                            setPlaceTypeValue(item.value);
                            setSubCategoryValue(null);
                            setReportTypeValue(null);
                        }}/>
                
                    <Dropdown
                        style={[viewStyles.dropdown, placeSubcategories]}
                        data={placeSubcategories[placeTypeValue]}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="소분류"
                        value={subCategoryValue}
                        onChange={item=>setSubCategoryValue(item.value)}
                    />
                </View>
            
                <View style={viewStyles.centerAlign}>
                    <Text style={textStyles.b18}>위치</Text>
                </View>
                <View style={viewStyles.horizontalAlign}>
                    <TextInput
                    style={viewStyles.textInputShort}
                    onChangeText={onChangeLocation}
                    placeholder="위치 검색"/>
                    <SideBtn
                        title={'지도'}
                        buttonColor={'lightgrey'}
                        buttonWidth={'25%'}
                        onPress={() => { alert('지도 띄우기'); }}
                    />
                </View>

                <View style={viewStyles.centerAlign}>
                    <Text style={textStyles.b18}>제보 내용</Text>
                </View>
                <View style={{paddingLeft:25}}>
                    <Dropdown
                        style={[viewStyles.dropdown, reportTypeValue && { borderColor: 'blue' }]}
                        data={reportType}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'제보 종류'}
                        value={reportTypeValue}
                        onFocus={() => setPlaceTypeValue(null)}
                        onBlur={() => setReportTypeValue(reportTypeValue)}
                        onChange={item => {
                            setReportTypeValue(item.value);
                            setPlaceTypeValue(null);
                        }}
                    />
                </View>
                <View style={viewStyles.centerAlign}>
                    <TextInput
                        style={viewStyles.textInputLarge}
                        onChangeText={onChangeContent}
                        placeholder="제보 내용"/>
                </View>
                <Text style={textStyles.rightAlign}>00/000 Byte</Text>



                <View style={viewStyles.centerAlign}>
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