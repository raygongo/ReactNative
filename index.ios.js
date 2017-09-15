/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import Account from './app/account/index'
import Home from './app/creation/index'
import List from './app/edit/index'


var MyApp = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'MyApp',

  getInitialState: function() {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  },


  render: function() {
    return (
      <TabBarIOS
        tintColor="green">
        <Icon.TabBarItem
          title="chat"
          iconName="ios-chatbubbles-outline"
          selectedIconName="ios-chatbubbles"
          selected={this.state.selectedTab === 'chat'}
          onPress={() => {
            this.setState({
              selectedTab: 'chat',
            });
          }}>
          <List />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          <Home />
        </Icon.TabBarItem>
        <Icon.TabBarItem
         title="main"
          iconName="ios-contact-outline"
          selectedIconName="ios-contact"
          selected={this.state.selectedTab === 'accout'}
          onPress={() => {
            this.setState({
              selectedTab: 'accout',
            });
          }}>
          <Account />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
