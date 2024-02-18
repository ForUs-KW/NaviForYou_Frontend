//RouteFind_detaild_page

import 'react-native-gesture-handler';
import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Button } from "react-native";
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const RouteFind_4 = ({ navigation }) => {
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

    const Drawer = createDrawerNavigator();

    return (
        <View style={styles.container}>
            <View style={styles.topView}>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Text>{"<"}</Text>
                </TouchableOpacity>

                <Text>{"출발지 "}</Text>
                <Text>{"->"}</Text>
                <Text>{"도착지 "}</Text>

            </View>
            
            <View style={styles.bottomView}>
                <View style={styles.leftView}></View>
                <View style={styles.rightView}>
                    <WebView style={styles.baseView}
                        originWhitelist={['*']}
                        source={{ html: htmlContent }}
                />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    topView:{
        position: 'relative',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        backgroundColor: 'yellow',
    },
    backButton: {
        justifyContent: 'center',
        alignItems:'center',
        width: '10%',
        height: '100%',
        
    },
    bottomView: {
        height: '90%',
        flexDirection: 'row'
    },
    leftView: {
        width: '10%',
        height: "100%",
        backgroundColor: 'white',
    },
    rightView: {
        width: '90%',
        height: "100%",
    },

    
});

export default RouteFind_4;