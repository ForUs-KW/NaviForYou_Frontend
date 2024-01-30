//textStyles.js

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
    title1: {
      marginTop: 0,
      marginBottom: 30,
      marginHorizontal:20,
      fontSize: 36,
      fontWeight: 'bold',
    },
    content20: {
      marginVertical:15,
      marginHorizontal:20,
      fontSize: 20,
      fontWeight: 'bold',
    },

    centerText: {
      margin: 12,
      fontSize: 20,
      textAlign: 'center',
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
  });

  export default textStyles;