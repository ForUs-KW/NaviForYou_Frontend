//styles.js

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';



const viewStyles = StyleSheet.create({
    title: {
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal:20,
      fontSize: 30,
      fontWeight: 'bold',
    },
    centerText: {
      margin: 12,
      fontSize: 20,
      textAlign: 'center',
    },
    content: {
      marginTop:20,
      marginBottom:5,
      marginHorizontal:20,
      fontSize: 18,
      fontWeight: 'bold',
    },
    content16: {
      marginHorizontal:20,
      marginTop:1,
      fontSize: 16,
    },
    content6: {
      marginHorizontal:20,
      marginTop:1,
      fontSize: 12,
    },
    tabview: {
      flexDirection: "row",
    },
    centerItems: {
      alignItems: "center",
      justifyContent: "center",
    },
    textInput:{
      marginHorizontal:20,
      marginVertical:5,
      paddingHorizontal: 10,
      height: 40,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth:1,
    },
    textInputShort:{
      marginHorizontal:20,
      paddingHorizontal: 10,
      height: 40,
      width: '60%',
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth:1,
    },
    image:{
      width: '30%',
      height: '30%',
      marginTop: 30,
      marginBottom: 50,
    },
  });

  export default viewStyles;