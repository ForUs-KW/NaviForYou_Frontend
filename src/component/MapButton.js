//MapButton.js

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MapButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4ECDC4',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MapButton;
