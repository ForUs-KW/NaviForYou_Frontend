import React from "react";
import {Webview} from 'react-native-webview';

const REST_API_KEY = '7cc503f8f35ee5bebc80458ff8f84cea'
const REDIRECT_URI = 'http://localhost:8080/app/member/kakao'

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

function KakaoLogin() {
    console.log("KakaoLogin 함수 호출됨"); // 로그 추가
    return (
      <View style={{ flex: 1 }}>
        <WebView
          style={{ flex: 1 }}
          source={{
            uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
          }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          javaScriptEnabled
          onMessage={event => {
            alert("웹 뷰 호출");
            console.log("onMessage handler is called."); // 로그 추가
            const data = event.nativeEvent.url;
            console.log("Received message from WebView:", data); 
            getCode(data);
          }}
        />
      </View>
    );
  }