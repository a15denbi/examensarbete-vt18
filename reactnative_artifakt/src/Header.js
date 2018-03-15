//
//  Header.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>Header Component</Text>
      </View>
    );
  }
}

const styles = {
  header: {
    height: 100,
    width: 100    
  }
};

export default Header;