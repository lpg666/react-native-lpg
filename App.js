import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './js/page/navs/RootNavigator'


export default class App extends React.Component {
  render() {
    return (
      <RootNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}

const styles = StyleSheet.create({
  
});
