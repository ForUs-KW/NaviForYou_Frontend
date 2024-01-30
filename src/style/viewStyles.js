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
      paddingHorizontal: 20,
      marginBottom: 10,
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