import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Banner from '../components/Banner'
import Card from '../components/Card'

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
        <Card
          title={'Beautiful wave'}
          image={{ uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/AOOC3CJARN.jpg' }}
          subTitle={'Curated looks for creatives, pioneers, and individuals!'}
          backgroundColor={'#fff'}
        />
        <Card
          title={'Beautiful wave'}
          image={{ uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/B23METEB9K.jpg' }}
          subTitle={'Curated looks for creatives, pioneers, and individuals!'}
          imagePosition={'right'}
        />
      </View>
    );
  }
}
