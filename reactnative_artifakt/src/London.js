//
//  London.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-04-04.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Destination from './Destination';

export default class London extends Component {
  static navigationOptions = {
    title: "London",
    headerStyle: {
      backgroundColor: "#1a98fc"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerBackTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff"
  };

  render() {
    return (
      <View>
        <Destination />
        <Image style={styles.imageStyle} source={require('../assets/london2.jpg')} />
        <Text style={styles.textStyle}>
          London in Great Britain
        </Text>
      </View>
    )
  }
}

const styles = {
  imageStyle: {
    width: null,
    height: 500,
    resizeMode: 'cover'
  },
  textStyle: {
    paddingTop: 15,
    paddingLeft: 10
  }
};
