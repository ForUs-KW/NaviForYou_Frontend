
import React from 'react';

import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import {default as myPage} from "./src/screens/myPage.js";
import {default as loginPage_1} from "./src/screens/loginPages/loginPage_1.js";
import {default as loginPage_2} from "./src/screens/loginPages/loginPage_2.js";
import {default as loginPage_3} from "./src/screens/loginPages/loginPage_3.js";
import {default as loginPage_4} from "./src/screens/loginPages/loginPage_4.js";
import {default as EditInfo} from "./src/screens/EditInfo.js";
import {default as Settings} from "./src/screens/Settings.js";
import {default as ReportPage_1} from "./src/screens/reportPages/ReportPage_1.js";
import {default as ReportPage_2} from "./src/screens/reportPages/ReportPage_2.js";


enableScreens();
const stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "myPage">
        <stack.Screen name="myPage" component={myPage}/>
        <stack.Screen name="loginPage_1" component={loginPage_1}/>
        <stack.Screen name="loginPage_2" component={loginPage_2}/>
        <stack.Screen name="loginPage_3" component={loginPage_3}/>
        <stack.Screen name="loginPage_4" component={loginPage_4}/>
        <stack.Screen name="EditInfo" component={EditInfo}/>
        <stack.Screen name="Settings" component={Settings}/>
        <stack.Screen name="ReportPage_1" component={ReportPage_1}/>
        <stack.Screen name="ReportPage_2" component={ReportPage_2}/>
      </stack.Navigator>
    </NavigationContainer>
  );//return
}

export default App;