import React, { PropTypes } from 'react';
import {
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper'

const defaultProps = {
  data: [{
    img: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/6T4KJZ8W9M.jpg' },
    text: 'Hello Swiper',
    textPosition: 'bottomLeft',
    textColor: '#fff',
  }, {
    img: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/OERP9XI9YB.jpg' },
    text: 'Hello Swiper',
  }, {
    img: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/1U68PK9DJ0.jpg' },
    text: 'Hello Swiper',
    textPosition: 'topRight',
    textColor: '#fff',
  }],
};

const propTypes = {
  data: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  topLeft: {
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  topRight: {
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  bottomLeft: {
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  bottomRight: {
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

const Banner = (props) => {
  return (
    <Swiper style={styles.wrapper} height={250} horizontal autoplay>
      <Image style={[styles.slide, styles.bottomLeft]} source={{ uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/6T4KJZ8W9M.jpg' }}>
        <Text style={[styles.text]}>Hello Swiper</Text>
      </Image>
      <Image style={styles.slide} source={{ uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/OERP9XI9YB.jpg' }}>
        <Text style={styles.text}>And simple</Text>
      </Image>
      <Image style={[styles.slide, styles.topRight]} source={{ uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/1U68PK9DJ0.jpg' }}>
        <Text style={styles.text}>Beautiful</Text>
      </Image>
    </Swiper>
  );
};


Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
