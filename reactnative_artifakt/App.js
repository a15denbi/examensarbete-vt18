//
//  App.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import Deck from './src/Deck';

// exempel require lokal img
/* <Image source={require('./my-icon.png')} />

<Image source={require('./assets/greece1.jpeg')} />
<Image source={require('./assets/london1.jpeg')} />
<Image source={require('./assets/paris1.jpg')} />
*/


// fixa url/uri lokal länk!
const DATA = [
  { id: 1, text: 'Santorini #1', img: require('./assets/greece1.jpeg') },
  { id: 2, text: 'London #2', img: require('./assets/london1.jpeg') },
  { id: 3, text: 'Paris #3', img: require('./assets/paris1.jpg') },
];

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Text>{item.text}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Deck
          data={DATA}
          renderCard={this.renderCard}
        />
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
