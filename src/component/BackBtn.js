// CustomButton.js
import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import btnImg from '../img/rightArrow.png';

export default class CustomButton extends Component {
  static defaultProps = {
    imageSource: btnImg,
    onPress: () => null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Image source={require('../img/rightArrow.png')} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  image: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
});