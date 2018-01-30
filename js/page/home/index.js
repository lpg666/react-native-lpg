import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default class HomeIndex extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarLabel: '首页',
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
          onPress={() => navigate('aaa')}
          title="去内页"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});