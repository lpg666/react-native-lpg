import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default class MyIndex extends React.Component {
  static navigationOptions ={
    title: '我的',
    tabBarLabel: '我的',
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
        <Text>我的</Text>
        <Button
          onPress={() => navigate('CartIndex')}
          title="go CartIndex"
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