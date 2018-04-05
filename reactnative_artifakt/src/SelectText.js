//
//  SelectText.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-17.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React from 'react';
import { Text } from 'react-native';

const SelectText = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Select Your Destination</Text>;
};

const styles = {
  textStyle: {
    color: '#555',
    fontSize: 17,
    paddingTop: 30,
    paddingLeft: 10,
    paddingBottom: 16
  }
};

export default SelectText;