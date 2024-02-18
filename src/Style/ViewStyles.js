//styles.js

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';



const viewStyles = StyleSheet.create({
    tabview: {
      flexDirection: "row",
      justifyContent: "center",
    },
    centerItems: {
      alignItems: "center",
      justifyContent: "center",
    },
    textInput:{
      fontSize: 18,
      color:'gray',
      borderRadius: 5,
      width: '85%',
      borderColor:'gray',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginBottom: 10,
      marginHorizontal: 25,
    },
    textInputShort:{
      fontSize:18,
      color:'gray',
      borderRadius: 5,
      width: '55%',
      height: 40,
      borderColor: 'gray',
      borderWidth:1,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginLeft:25,
      marginRight:5,
    },
    textInputLarge:{
      fontSize: 18,
      color:'gray',
      borderRadius: 5,
      width: '85%',
      borderColor:'grey',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginHorizontal:25,
      height:'30%',
    },
    dropdown:{
      width: '40%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginHorizontal:10,
      marginVertical:10,
      backgroundColor:'white',
    },
    image:{
      width: '30%',
      height: '30%',
      marginTop: 30,
      marginBottom: 50,
    },
    pagePadding:{
      padding: '30',
    }
  });

  export default viewStyles;