import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeIndex from '../home/index';
import CartIndex from '../cart/index';
import OrderIndex from '../order/index';
import MyIndex from '../my/index';
import aaa from '../home/aaa';

const RootTabs = TabNavigator({
  HomeIndex: {
    screen: HomeIndex,
  },
  CartIndex: {
    screen: CartIndex,
  },
  OrderIndex: {
    screen: OrderIndex,
  },
  MyIndex: {
    screen: MyIndex,
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    //选中颜色
    activeTintColor: '#333',
    inactiveTintColor: '#333',
    indicatorStyle: {
      backgroundColor: '#fff',
    },
    pressOpacity: .9,
    showIcon: true,
    labelStyle: {
      marginTop: -2,
      fontSize: 12,
    },
    style: {
      height: 50,
      backgroundColor: '#fff',
    }
  },
});

const RootNavigator = StackNavigator({
  HomeIndex: {
    screen: RootTabs,
  },
  CartIndex: {
    screen: CartIndex,
  },
  OrderIndex: {
    screen: OrderIndex,
  },
  MyIndex: {
    screen: MyIndex,
  },
  aaa: {
    screen: aaa,
  }
}, {
  navigationOptions: {
    headerBackTitle: '',
    headerStyle: {
      height: 40,
    },
    headerTitleStyle:{
      fontSize: 16,
      alignSelf: 'center',
    }
  }
});

export default RootNavigator;