//
//  App.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SelectText from './src/SelectText';
import Santorini from './src/Santorini';
import London from './src/London';
import Paris from './src/Paris';

// main stack
class App extends React.Component {
  static navigationOptions = {
    title: "Travel Buddy",
    headerStyle: {
      backgroundColor: "#1a98fc"
    },
    headerTitleStyle: {
      color: "#fff"
    }
  };

  goToSantorini = () => {
    this.props.navigation.navigate('Santorini');
  };

  goToLondon = () => {
    this.props.navigation.navigate('London');
  };

  goToParis = () => {
    this.props.navigation.navigate('Paris');
  };

  render() {
    return (      
      <View>        
        <SelectText />
        <ImageBackground onPress={this.goToSantorini} style={styles.container} source={require('./assets/santorini.jpg')}>
          <Text onPress={() => this.props.navigation.navigate('Santorini')} style={styles.textStyle}>Santorini</Text>
        </ImageBackground>

        <ImageBackground style={styles.container} source={require('./assets/london.jpg')}>
          <Text onPress={() => this.props.navigation.navigate('London')} style={styles.textStyle}>London</Text>
        </ImageBackground>

        <ImageBackground style={styles.container} source={require('./assets/paris.jpg')}>
          <Text onPress={() => this.props.navigation.navigate('Paris')} style={styles.textStyle}>Paris</Text>
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

export default StackNavigator({
  Home: {
    screen: App
  },
  Santorini: {
    screen: Santorini
  },
  London: {
    screen: London
  },
  Paris: {
    screen: Paris
  }
});