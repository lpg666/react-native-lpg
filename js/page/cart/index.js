import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class CartIndex extends React.Component {
  static navigationOptions ={
    title: '购物车',
    tabBarLabel: '购物车',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../common/img/homepage.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return <Text>List of all contacts</Text>
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});