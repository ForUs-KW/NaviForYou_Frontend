//textStyles.js

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
    title1: {
        marginBottom:30,
        marginHorizontal:25,
        fontSize: 36,
        fontWeight: 'bold',
    },
    title2: {
        marginBottom:30,
        marginHorizontal:25,
        fontSize: 28,
    },
    content20: {
        //borderColor:'grey',
        //borderWidth:1,
        paddingVertical: 10,
        //paddingHorizontal: 20,
        marginBottom: 10,
        fontSize: 18,
        width:'85%',
    },
    content16: {
        marginHorizontal:25,
        marginBottom:15,
        marginTop:1,
        fontSize: 16,
    },
    content6: {
        marginHorizontal:25,
        marginTop:1,
        fontSize: 12,
    },

    errorText:{
        marginHorizontal:25,
        fontSize: 16,
        color:'red',
    },


    centerText: {
      margin: 12,
      fontSize: 20,
      textAlign: 'center',
    },
    rightText: {
        marginHorizontal: 25,
        fontSize: 16,
        textAlign: 'right',
    }
  });

  export default textStyles;