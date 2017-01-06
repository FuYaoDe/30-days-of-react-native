import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Card from '../components/Card'

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
  },
});

export default class Detail extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <Card {...this.props} />
      </View>
    );
  }
}
