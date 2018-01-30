import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class CartIndex extends React.Component {
  static navigationOptions ={
    title: '内页',
    headerRight: <View/>
  };

  render() {
    return <Text>List of all contacts</Text>
  }
}

const styles = StyleSheet.create({
  
});