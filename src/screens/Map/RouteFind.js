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
                    <View>
                        <Text>{"출발지 입력"}</Text>
                    </View>
                    <View>
                        <Text>{"도착지 입력"}</Text>
                    </View>

                </View>
                    

                <View>
                    <TouchableOpacity
                        style={styles.backButton}
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
        position: 'absolute',
        width: '100%',
        height: '20%',
        flexDirection: 'row'

    },
    backButton: {
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
    searchTextInput:{
        position: 'absolute',
        flexDirection: 'column',
    },
});

  export default RouteFind;