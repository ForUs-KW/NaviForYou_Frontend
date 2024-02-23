import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

const RouteFind = () => {

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

                <View style={styles.searchTextInput}
                    //터치로 바꿀 예정
                >
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
                <Tab.Navigator
                    initialRouteName="Walk"
                    screenOptions={{
                        tabBarIndicatorStyle: {backgroundColor: '#009688'},
                        tabBarActiveTintColor: '#009688',
                }}>
                    <Tab.Screen
                        name="Walk"
                        component={WalkScreen}
                        options={{
                        tabBarLabel: '도보',
                        tabBarIcon: () => (
                        <Icon name="home" color='#009688' size={24}/>
                        ),
                    }}/>
                    <Tab.Screen
                        name="Public"
                        component={PublicScreen}
                        options={{
                        tabBarLabel: '대중교통',
                        tabBarIcon: ({}) => (
                        <Icon name="notifications" color='#009688' size={24} />
                        ),
                    }}/>
                    <Tab.Screen
                        name="Car"
                        component={CarScreen}
                        options={{
                        tabBarLabel: '차도',
                        tabBarIcon: ({}) => (
                        <Icon name="search" color='#009688' size={24} />
                        ),
                    }}/>

                </Tab.Navigator>
            </View>
        </View>
    );
  };

  function WalkScreen(){
    return <Text>Walk</Text>;
  }
  function PublicScreen(){
    return <Text>Public</Text>;
  }
  function CarScreen(){
    return <Text>Car</Text>;
  }
  
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

  export default RouteFind;