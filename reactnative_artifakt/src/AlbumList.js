//
//  AlbumList.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// class for lifecycle methods for the data load from the arrayList
class AlbumList extends Component {
  componentWillMount() {
    console.log('sht loaded');
  }

  render() {
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

export default AlbumList;