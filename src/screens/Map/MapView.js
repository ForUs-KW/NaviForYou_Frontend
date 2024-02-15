import React from 'react';
import { WebView } from 'react-native-webview';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

import MapButton from "../../component/MapButton.js";

const MapView = ({ navigation }) => {
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
        <WebView style={styles.baseView}
                originWhitelist={['*']}
                source={{ html: htmlContent }}
        />
        <View style={styles.topView}>
            <View style = {styles.myPage}>
                <MapButton title = "="
                    onPress={() => navigation.navigate('MyPage')}
                    navigation={navigation}
                />
            </View>
            <View style = {styles.searchBar} pointerEvents="auto">
                <MapButton title = "장소를 입력하세요"
                    onPress={() => navigation.navigate('SearchView')}
                    navigation={navigation}
                />
            </View>
            <View style = {styles.routeFind} pointerEvents="auto">
                <MapButton title = "->"/>
            </View>
    </View>

    </View>
    
  );

  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    baseView:{
        position :'absolute',
        width: '100%',
        height: '100%',
    },
    topView:{
        position: 'absolute',
        width: '100%',
        height: '8%',
        backgroundColor: '(0, 0, 0, 1)',
        flexDirection: 'row'

    },
    searchBar:{
        width: '50%'
    }
  });

export default MapView;
