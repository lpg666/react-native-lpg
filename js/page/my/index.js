import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MyIndex extends React.Component {
  static navigationOptions ={
    title: '我的',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>我的</Text>
        <Button
          onPress={() => navigate('CartIndex')}
          title="go CartIndex"
        />
      </View>
    );
  }
}