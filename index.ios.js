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
  View
} from 'react-native';
import StacksInTabs from './src/utils/router';

export default class CBKRegioOost extends Component {
  render() {
    return (
      <StacksInTabs />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('CBKRegioOost', () => CBKRegioOost);
