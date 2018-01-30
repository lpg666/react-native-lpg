import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeIndex extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../common/img/homepage.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>首页</Text>
        <Button
          onPress={() => navigate('MyIndex')}
          title="go MyIndex"
        />
      </View>
    );
  }
}