import React, { Component, PropTypes } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Intro from './Intro';
import Login from './Login';
import Home from './Home';
import Detail from './Detail';

const RouterWithRedux = connect()(Router);

export default class AppRoute extends React.Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="intro" hideNavBar component={Intro} initial/>
          <Scene key="login" hideNavBar component={Login} title="登入" />
          <Scene key="home" hideNavBar={false} hideBackImage={true} onBack={() => {}} component={Home} title="Home" />
          <Scene key="cardDetail" hideNavBar={false} component={Detail} />
        </Scene>
      </RouterWithRedux>
    );
  }
}
