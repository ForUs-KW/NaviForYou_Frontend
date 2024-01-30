//styles.js

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';



const viewStyles = StyleSheet.create({
    tabview: {
      flexDirection: "row",
    },
    centerItems: {
      alignItems: "center",
      justifyContent: "center",
    },
    textInput:{
      fontSize: 18,
      borderRadius: 5,
      width: '85%',
      borderColor:'grey',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginBottom: 10,
    },
    textInputShort:{
      fontSize:18,
      borderRadius: 5,
      width: '55%',
      height: 40,
      borderColor: 'gray',
      borderWidth:1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginLeft:25,
      marginRight:5,
      marginHorizontal:10,
    },
    textInputLarge:{
      fontSize: 18,
      borderRadius: 5,
      width: '85%',
      borderColor:'grey',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginBottom: 10,
      height:'30%',
    },
    image:{
      width: '30%',
      height: '30%',
      marginTop: 30,
      marginBottom: 50,
    },
  });

  export default viewStyles;