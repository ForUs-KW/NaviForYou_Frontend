
import React from 'react';

import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import {default as MapView} from "./src/screens/Map/MapView.js";
import {default as SearchView} from "./src/screens/Map/SearchView.js";
import {default as RouteFind} from "./src/screens/Map/RouteFind.js";
import {default as RouteFind_1} from "./src/screens/RouteFind/RouteFind_1.js";
import {default as RouteFind_2} from "./src/screens/RouteFind/RouteFind_2.js";
import {default as RouteFind_3} from "./src/screens/RouteFind/RouteFind_3.js";
import {default as RouteFind_4} from "./src/screens/RouteFind/RouteFind_4.js";

import {default as MyPage} from "./src/screens/MyPage.js";
import {default as LoginPage_1} from "./src/screens/loginPages/LoginPage_1.js";
import {default as LoginPage_2} from "./src/screens/loginPages/LoginPage_2.js";
import {default as LoginPage_3} from "./src/screens/loginPages/LoginPage_3.js";
import {default as LoginPage_4} from "./src/screens/loginPages/LoginPage_4.js";
import {default as EditInfo} from "./src/screens/EditInfo.js";
import {default as Settings} from "./src/screens/Settings.js";
import {default as ReportPage_1} from "./src/screens/reportPages/ReportPage_1.js";
import {default as ReportPage_2} from "./src/screens/reportPages/ReportPage_2.js";
import {default as FindAccount} from "./src/screens/FindAccounts/FindAccount.js";
import {default as FindEmail} from "./src/screens/FindAccounts/FindEmail.js";
import {default as FindPassword} from "./src/screens/FindAccounts/FindPassword.js";

enableScreens();
const stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "RouteFind_4">
        <stack.Screen name="MapView" component={MapView}/>
        <stack.Screen name="SearchView" component={SearchView}/>
        <stack.Screen name="RouteFind" component={RouteFind}/>
        <stack.Screen name="RouteFind_1" component={RouteFind_1}/>
        <stack.Screen name="RouteFind_2" component={RouteFind_2}/>
        <stack.Screen name="RouteFind_3" component={RouteFind_3}/>
        <stack.Screen name="RouteFind_4" component={RouteFind_4}/>


        <stack.Screen name="MyPage" component={MyPage}/>
        <stack.Screen name="LoginPage_1" component={LoginPage_1}/>
        <stack.Screen name="LoginPage_2" component={LoginPage_2}/>
        <stack.Screen name="LoginPage_3" component={LoginPage_3}/>
        <stack.Screen name="LoginPage_4" component={LoginPage_4}/>
        <stack.Screen name="EditInfo" component={EditInfo}/>
        <stack.Screen name="Settings" component={Settings}/>
        <stack.Screen name="ReportPage_1" component={ReportPage_1}/>
        <stack.Screen name="ReportPage_2" component={ReportPage_2}/>
        <stack.Screen name="FindAccount" component={FindAccount}/>
        <stack.Screen name = "FindEmail" component={FindEmail}/>
        <stack.Screen name = "FindPassword" component={FindPassword}/>
      


      </stack.Navigator>

    </NavigationContainer>
  );//return
}

export default App;