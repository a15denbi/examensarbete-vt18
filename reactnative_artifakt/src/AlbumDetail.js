//
//  AlbumDetail.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-20.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;