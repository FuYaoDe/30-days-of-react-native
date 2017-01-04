import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Banner from '../components/Banner'

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
  },
});

export default class Login extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <Banner />
      </View>
    );
  }
}
