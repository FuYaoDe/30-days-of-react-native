import React, { PropTypes } from 'react';
import {
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper'

const defaultProps = {
  data: [],
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

const Banner = (props) => (
  <Swiper style={styles.wrapper} height={250} horizontal autoplay>
    {
      props.data.map((data, i) => (
        <Image key={`ad${i}`} style={[styles.slide, styles[data.textPosition]]} source={data.img}>
          <Text style={[styles.text, { color: data.textColor || '#fff' }]}>{data.text}</Text>
        </Image>
      ))
    }
  </Swiper>
);


Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
