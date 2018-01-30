import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeIndex from '../home/index';
import MyIndex from '../my/index';

const RootTabs = TabNavigator({
  HomeIndex: {
    screen: HomeIndex,
  },
  MyIndex: {
    screen: MyIndex,
  },
}, {
  tabBarPosition: 'bottom',
});

const RootNavigator = StackNavigator({
  HomeIndex: {
    screen: RootTabs,
  },
  MyIndex: {
    screen: MyIndex,
  },
});

export default RootNavigator;