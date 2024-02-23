//RouteFind_result_page


import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Button } from "react-native";
import { WebView } from 'react-native-webview';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
//import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();

const RouteFind_3 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.topView}>

                <View style={{
                    justifyContent: 'center',
                    alignItems:'flex-end',
                    height:'100%',
                    width: '10%',}}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}>
                        <Text>{"<"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchTextInput}>
                    <TouchableOpacity style={styles.searchStart}>
                        <Text>{"출발지 입력"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchArrive}>
                        <Text>{"도착지 입력"}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems:'flex-start',
                    height:'100%',
                    width: '10%',}}>
                    <TouchableOpacity
                        style={styles.switchButton}
                        onPress={() => {}}>
                        <Text>{"l"}</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            <View style={styles.bottomView}>
                <Tab.Navigator
                    initialRouteName="Walk"
                    screenOptions={{
                        tabBarIndicatorStyle: {backgroundColor: '#009688'},
                        tabBarActiveTintColor: '#009688',
                }}>
                    <Tab.Screen
                        //style={{ width: screenHeight * 0.75, }}
                        name="Walk"
                        component={WalkScreen}
                        options={{
                        tabBarLabel: '도보',
                        // tabBarIcon: () => (
                        // <Icon name="home" color='#009688' size={24}/>
                        // ),
                    }}/>
                    <Tab.Screen
                        //style={{ width: screenHeight * 0.75, }}
                        name="Public"
                        component={PublicScreen}
                        options={{
                        tabBarLabel: '대중교통',
                        // tabBarIcon: ({}) => (
                        // <Icon name="notifications" color='#009688' size={24} />
                        // ),
                    }}/>
                    <Tab.Screen
                        //style={{ width: screenHeight * 0.75, }}
                        name="Car"
                        component={CarScreen}
                        options={{
                        tabBarLabel: '차도',
                        // tabBarIcon: ({}) => (
                        // <Icon name="search" color='#009688' size={24} />
                        // ),
                    }}/>
                </Tab.Navigator>
            </View>
        </View>
        );
    };

    function WalkScreen(){
        const htmlContent = `
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <title>simpleMap</title>
            <script src="https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=JZXNstlRPo3l7jWiYptqM8mxiJVjEgdc9EXI4hc9"></script>
            <script type="text/javascript">
            function initTmap(){
                var map = new Tmapv3.Map("map_div",  
                {
                center: new Tmapv3.LatLng(37.566481622437934,126.98502302169841), // 지도 초기 좌표
                width: "100%", 
                height: "100%",
                zoom: 18
                });
                var marker = new Tmapv3.Marker({
                    position: new Tmapv3.LatLng(37.566481622437934,126.98502302169841),
                    map: map
                });
            } 
            </script>
        </head>
        <body onload="initTmap()">
            <div id="map_div" style="width:100% height:100%;">
            </div>        
        </body>
        </html>
    `;
        // const [date, setDate] = useState(new Date())
        // const [open, setOpen] = useState(flase)

        return (
            <View style = {{flex: 1,
                flexDirection : 'column'
            }}>
                <View style={{
                    height : '6%',
                    width : '100%',
                    backgroundColor: 'yellow'
                    }}>
                    {/* <Button title = "Open" 
                        onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={()=>{
                            setOpen(false)
                        }}
                    /> */}

                </View>
                <View>
                    <WebView
                        originWhitelist={['*']}
                        source={{ html: htmlContent }}
                    />
                </View>
            </View>
        );
    }
    function PublicScreen(){
        return (
            <View style={{flex: 1,
                flexDirection : 'column'}}>
                <View style={{
                    height : '6%',
                    width : '100%',
                    backgroundColor: 'yellow'
                    }}>
                    {/* <DatePicker
                        date={date}
                        onDateChange={setDate}
                    /> */}
                </View>
                <ScrollView style={styles.PublicView}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Dan'},
                            {key: 'Dominic'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Devin'},
                            {key: 'Dan'},
                            {key: 'Dominic'},
                        ]}
                        renderItem={({item}) => <TouchableOpacity style={styles.item}>{item.key}</TouchableOpacity>}
                    />
                </ScrollView>
            </View>
        );
    }
    function CarScreen(){
        const htmlContent = `
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <title>simpleMap</title>
            <script src="https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=JZXNstlRPo3l7jWiYptqM8mxiJVjEgdc9EXI4hc9"></script>
            <script type="text/javascript">
            function initTmap(){
                var map = new Tmapv3.Map("map_div",  
                {
                center: new Tmapv3.LatLng(37.566481622437934,126.98502302169841), // 지도 초기 좌표
                width: "100%", 
                height: "100%",
                zoom: 18
                });
                var marker = new Tmapv3.Marker({
                    position: new Tmapv3.LatLng(37.566481622437934,126.98502302169841),
                    map: map
                });
            } 
            </script>
        </head>
        <body onload="initTmap()">
            <div id="map_div" style="width:100% height:100%;">
            </div>        
        </body>
        </html>
    `;
        return (
            <View style = {{flex: 1,
                flexDirection : 'column'
            }}>
                <View style={{
                    height : '6%',
                    width : '100%',
                    backgroundColor: 'yellow'
                    }}>
                    {/* <DatePicker
                        date={date}
                        onDateChange={setDate}
                    /> */}
                </View>
                <View>
                    <WebView
                        originWhitelist={['*']}
                        source={{ html: htmlContent }}
                    />
                </View>
            </View>
        );
    }
  
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            height: '100%',
        },
        topView:{
            //position: 'absolute',
            position: 'relative',
            width: '100%',
            height: '15%',
            flexDirection: 'row',
        },
        backButton: {
            //position: 'absolute',
            //left: 0,
            justifyContent: 'center',
            alignItems:'center',
            width: '50%',
            height: '30%',
            //paddingHorizontal: 10,
            backgroundColor: 'red',
        },
        switchButton: {
            //left: 0,
            justifyContent: 'center',
            alignItems:'center',
            //paddingHorizontal: 10,
            width: '50%',
            height: '30%',
            backgroundColor: 'blue',
        },
        searchTextInput:{
            //position: 'absolute',
            width: '80%',
            height: '100%',
            flexDirection: 'column',
            backgroundColor: 'green',
        },
        searchStart: {
            justifyContent: 'center',
            width: '100%',
            height: '50%',
            backgroundColor: 'yellow',
        },
        searchArrive: {
            justifyContent: 'center',
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
        },
        bottomView:{
            height: '85%',
        },
        
        PublicView:{
            height: screenHeight * 0.75,
            paddingTop: 22
        },
        item:{
            padding: 10,
            fontSize: 18,
            height: 100,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#f0f0f0',
        },
        
    });

export default RouteFind_3;