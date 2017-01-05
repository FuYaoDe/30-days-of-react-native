import React, { PropTypes } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native';

const defaultProps = {
  title: '',
  subTitle: '',
  image: '',
  imagePosition: 'left',
  backgroundColor: 'rgb(238, 219, 214)'
};

const propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  subTitle: PropTypes.string,
  imagePosition: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 200,
  },
  desc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#2c2c2c',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#2c2c2c'
  }
});

const Card = (props) => {
  let flexDirection = props.imagePosition === 'left' ? 'row' : 'row-reverse';
  return(
    <View style={[styles.container, { flexDirection }]}>
      <Image source={props.image} style={styles.img} />
      <View style={[styles.desc, { backgroundColor: props.backgroundColor }]}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
}


Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
