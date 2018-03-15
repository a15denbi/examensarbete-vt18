//
//  App.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './src/Header';
import AlbumList from './src/AlbumList';

// The dataArrayList
const DATA = [
  { id: 1, text: 'Santorini #1', img: require('./assets/greece1.jpeg') },
  { id: 2, text: 'London #2', img: require('./assets/london1.jpeg') },
  { id: 3, text: 'Paris #3', img: require('./assets/paris1.jpg') },
];

export default class App extends React.Component {
  render() {
    return (
      //style={styles.container} i view
      <View>
        <Header headerText={'Travel Buddy'} />   
        <AlbumList />     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
