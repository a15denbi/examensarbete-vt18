//
//  App.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import Header from './src/Header';
import SelectText from './src/SelectText';

// the lifecycle method
export default class App extends React.Component {
  render() {
    return (      
      <View>
        <Header headerText={'Travel Buddy'} />
        <SelectText />
        <ImageBackground style={styles.container} source={require('./assets/santorini.jpg')}>
          <Text style={styles.textStyle}>Santorini</Text>
        </ImageBackground>
        <ImageBackground style={styles.container} source={require('./assets/london.jpg')}>
          <Text style={styles.textStyle}>London</Text>
        </ImageBackground>
        <ImageBackground style={styles.container} source={require('./assets/paris.jpg')}>
          <Text style={styles.textStyle}>Paris</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold'
  }
});