//
//  Santorini.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-04-04.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Destination from './Destination';

export default class Santorini extends Component {
  static navigationOptions = {
    title: "Santorini",
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
        <Image style={styles.imageStyle} source={require('../assets/greece2.jpeg')} />
        <Text style={styles.textStyle}>
          Santorini in Greece
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
