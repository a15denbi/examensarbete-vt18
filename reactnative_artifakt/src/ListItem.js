//
//  ListItem.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-17.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React, { Component } from 'react';
import { View, Image } from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <Image style={{ width: 450, height: 140 }} source={this.props.image}></Image>
    );
  }
}

export default ListItem;