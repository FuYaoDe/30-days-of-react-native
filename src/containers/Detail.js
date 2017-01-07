import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import ParallaxView from 'react-native-parallax-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  title: {
    top: -10,
    paddingBottom: 10,
    fontSize: 25,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#2c2c2c',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  price: {
    paddingBottom: 10,
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#2c2c2c',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#2c2c2c'
  },
  starContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  bottomContainer: {
    flex: 1,
    height: 20,
    flexDirection:'row',
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: 'rgb(238, 219, 214)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#53423D',
    fontWeight: 'bold',
  },
});

export default class Detail extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      star: 0
    };
  }

  rankStar = (rank) => {
    const star = [];
    for (let i = rank; i > 0; i--) {
      if (i >= 1) {
        star.push(
          <Icon
            key={i}
            style={{ marginRight: 5 }}
            name={'star'}
            size={15}
            color={'gold'}
          />
        );
      } else if (i < 1 && i >= 0.5) {
        star.push(
          <Icon
            key={'tail'}
            style={{ marginRight: 5 }}
            name={'star-half'}
            size={15}
            color={'gold'}
          />
        );
      }
    }
    return star;
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <ParallaxView
          backgroundSource={this.props.image}
          windowHeight={300}
          style={{ flex: 10 }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.price}>$129</Text>
            <View style={styles.starContainer}>
              {this.rankStar(4)}
            </View>
            <Text >Lorem ipsum dolor sit amet, at nibh, eget amet nunc, congue lobortis. Mi elit, purus eu nec. Accumsan quisque lectus, consectetuer et. Mauris tortor, mollis potenti, ac pellentesque in. Dui non augue, in ligula, lectus integer. Venenatis elementum voluptate, proin nulla. Tellus vel. Velit natoque in, magna aenean mi. Vitae nonummy, pulvinar in. Cum sit senectus, et ac blandit, ullamcorper pulvinar. Parturient accumsan mattis.
  Arcu duis. Sem ac, mauris congue commodo, libero morbi at. Et lacus varius, nec nibh euismod. Amet ac porta. Pharetra etiam. Vitae dictum. Suspendisse arcu imperdiet. In wisi, metus massa vel. Leo lectus aenean, ante duis est. Penatibus ut donec. Quis sit, consequat ipsum elit, dui in est.</Text>
          </View>
        </ParallaxView>
        <TouchableOpacity style={styles.bottomContainer}>
          <Icon
            style={{ marginRight: 15 }}
            name={'shopping-cart'}
            size={20}
            color={'#53423D'}
          />
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
