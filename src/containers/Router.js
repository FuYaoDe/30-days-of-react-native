import React, { Component, PropTypes } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';

const RouterWithRedux = connect()(Router);

export default class AppRoute extends React.Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="login" hideNavBar component={Login} title="登入" initial />
          <Scene key="home" component={Home} title="Home" initial />
        </Scene>
      </RouterWithRedux>
    );
  }
}
