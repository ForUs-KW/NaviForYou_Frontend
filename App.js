
import React from 'react';

import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import {default as MyPage} from "./src/screens/MyPage.js";
import {default as LoginPage_1} from "./src/screens/loginPages/LoginPage_1.js";
import {default as LoginPage_2} from "./src/screens/loginPages/LoginPage_2.js";
import {default as LoginPage_3} from "./src/screens/loginPages/LoginPage_3.js";
import {default as LoginPage_4} from "./src/screens/loginPages/LoginPage_4.js";
import {default as EditInfo} from "./src/screens/EditInfo.js";
import {default as Settings} from "./src/screens/Settings.js";
import {default as ReportPage_1} from "./src/screens/reportPages/ReportPage_1.js";
import {default as ReportPage_2} from "./src/screens/reportPages/ReportPage_2.js";


enableScreens();
const stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "MyPage">
        <stack.Screen name="MyPage" component={MyPage}/>
        <stack.Screen name="LoginPage_1" component={LoginPage_1}/>
        <stack.Screen name="LoginPage_2" component={LoginPage_2}/>
        <stack.Screen name="LoginPage_3" component={LoginPage_3}/>
        <stack.Screen name="LoginPage_4" component={LoginPage_4}/>
        <stack.Screen name="EditInfo" component={EditInfo}/>
        <stack.Screen name="Settings" component={Settings}/>
        <stack.Screen name="ReportPage_1" component={ReportPage_1}/>
        <stack.Screen name="ReportPage_2" component={ReportPage_2}/>
      </stack.Navigator>
    </NavigationContainer>
  );//return
}

export default App;