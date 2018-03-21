//
//  AlbumList.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-17.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import data from '../data.json';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  ComponentWillMount() {
    axios.get('https://raw.githubusercontent.com/a15denbi/examensarbete-vt18/master/reactnative_artifakt/data.json')
      .then(response => this.setState({ albums: response.data }));
  }

  //helper method
  RenderAlbums() {
    // map = array helper, call 3 times, one for each loaded item
   return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }


  render() {
    console.log(this.state);

    return (
      <View>
        {this.RenderAlbums}
      </View>
    );
  }
}

export default AlbumList;