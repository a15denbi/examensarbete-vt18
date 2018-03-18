//
//  App.js
//  TravelBuddy
//
//  Created by Dennis Bilberg on 2018-03-15.
//  Copyright © 2018 Dennis Bilberg. All rights reserved.
//
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from './src/Header';
import SelectText from './src/SelectText';
import ListItem from './src/ListItem';

// The dataArrayList
// const cards = [
//   { id: "0", title: "Santorini", picture: require('./assets/greece1.jpeg'), content: <Text>Greece pic</Text> },
//   { id: "1", title: "London", picture: require('./assets/london1.jpeg'), content: <Text>Big Ben</Text> },
//   { id: "2", title: "Paris", picture: require('./assets/paris1.jpg'), content: <Text>Mona Lisa</Text> },  
// ];

// the lifecycle
export default class App extends React.Component {
  render() {
    return (
      //style={styles.container} i view
      <View>
        <Header headerText={'Travel Buddy'} />  
        <SelectText />
        <FlatList 
          data={[
            require('./assets/greece1.jpeg'),
            require('./assets/london1.jpeg'),
            require('./assets/paris1.jpg'),
          ]}
          renderItem={({ item }) => {
            return <ListItem image={item} />
          }}
          keyExtractor={
            (index) => {
              return index
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
