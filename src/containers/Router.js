import React, { Component, PropTypes } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AsyncStorage, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Intro from './Intro';
import Login from './Login';
import Home from './Home';
import Detail from './Detail';

const RouterWithRedux = connect()(Router);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#2c2c2c',
    fontWeight: 'bold',
  }
});


export default class AppRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: null,
    };
  }
  componentWillMount() {
    this.getStorage().done();
    // this.setState({ firstPage: 'login' });
  }

  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@Route:initialPage');
      if (value !== null) {
        console.log(value);
        this.setState({ firstPage: value });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { firstPage } = this.state;
    if (firstPage === null) {
      return (
        <View style={styles.center}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      );
    }
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="intro" hideNavBar component={Intro} initial={firstPage === 'intro'} />
          <Scene key="login" hideNavBar component={Login} title="登入" initial={firstPage === 'login'} />
          <Scene
            key="home"
            hideNavBar={false}
            hideBackImage={true}
            onBack={() => {}} component={Home} title="Home"
            initial={firstPage === 'home'}
          />
          <Scene key="cardDetail" hideNavBar={false} component={Detail} />
        </Scene>
      </RouterWithRedux>
    );
  }
}
