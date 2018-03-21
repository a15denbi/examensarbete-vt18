//
//  Header.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#1a98fc',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff'
  }
};

export default Header;