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
        marginVertical:15,
        marginHorizontal:25,
        fontSize: 18,
        textAlign:'left',
    },
    content16: {
        marginHorizontal:25,
        marginTop:1,
        fontSize: 16,
    },
    content6: {
        marginHorizontal:25,
        marginTop:1,
        fontSize: 12,
    },





    centerText: {
      margin: 12,
      fontSize: 20,
      textAlign: 'center',
    },
  });

  export default textStyles;