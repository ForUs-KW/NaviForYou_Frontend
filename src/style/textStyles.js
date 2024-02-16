//textStyles.js
//내용: 텍스트 관련 스타일 모음

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

const color_gray='#3A3A3A';

const textStyles = StyleSheet.create({
//head text
    h1: {
        fontSize: 36,
        fontWeight: 'bold',
        color: color_gray,
        marginBottom:30,
        marginHorizontal:25,
    },
    h2: {
        fontSize: 28,
        color: color_gray,
        marginBottom:30,
        marginHorizontal:25,
    },

//body text: 숫자=fontSize
// b18이 기본
    b18: {
        fontSize: 18,
        color: color_gray,
        paddingVertical: 10,
        marginTop: 10,
        marginHorizontal:25,
        width:'85%',
    },
    b16: {
        fontSize: 16,
        paddingVertical: 10,
        marginBottom:10,
        marginHorizontal:25,
    },
    b12: {
        fontSize: 12,
        marginHorizontal:25,
        marginTop:1,
    },

//etc
    error:{
        marginHorizontal:25,
        fontSize: 15,
        color:'red',
    },
    rightAlign: {
        marginHorizontal: 25,
        fontSize: 16,
        textAlign: 'right',
    }
  });

  export default textStyles;