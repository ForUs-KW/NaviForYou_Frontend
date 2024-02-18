//RouteFind_start_arrive_position_setting

import React from 'react';
import { WebView } from 'react-native-webview';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

const RouteFind_1 = () => {
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
        <View style={styles.container}>
            <View style={styles.topView}>
                <View>
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
                    

                <View>
                    <TouchableOpacity
                        style={styles.switchButton}
                        onPress={() => {}}>
                        <Text>{"ll"}</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            <View style={styles.bottomView}>
                <WebView style={styles.baseView}
                    originWhitelist={['*']}
                    source={{ html: htmlContent }}
                />
            </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView:{
        //position: 'absolute',
        position: 'relative',
        width: '100%',
        height: '15%',
        flexDirection: 'row'

    },
    backButton: {
        //position: 'absolute',
        //left: 0,
        justifyContent: 'center',
        width: '10%',
        height: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'red',
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
    switchButton: {
        //left: 0,
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'blue',
    },
});

  export default RouteFind_1;