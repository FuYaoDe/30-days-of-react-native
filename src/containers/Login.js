import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottmContainer: {
    height: 60,
    flexDirection: 'row',
  },
  background: {
    height: 800,
    width: 600,
    position: 'absolute',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  desc: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  }
});

export default class Login extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?image=102&blur' }} />
        <View style={styles.container}>
          <Text style={[styles.title, { fontSize: 40}]}>Logo</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Your Music</Text>
          <Text style={styles.desc}>Save any song, album or artist to yout own music collection.</Text>
        </View>
        <View style={styles.bottmContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#53423D'}]}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A58987' }]}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
