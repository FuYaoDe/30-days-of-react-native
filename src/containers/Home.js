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

const ad = [{
  img: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/6T4KJZ8W9M.jpg' },
  text: 'Clothing',
  textPosition: 'bottomLeft',
}, {
  img: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/OERP9XI9YB.jpg' },
  text: 'Gentleman',
}, {
  img: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/1U68PK9DJ0.jpg' },
  text: 'Shoes & Bags',
  textPosition: 'topLeft',
}];

export default class Login extends Component {
  static propTypes = {};
  render() {
    return (
      <View style={styles.container}>
        <Banner data={ad} />
      </View>
    );
  }
}
