import React, { Component, PropTypes } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AsyncStorage, View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import CodePush from 'react-native-code-push';

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
  }

  componentDidMount() {

    CodePush.checkForUpdate()
    .then( (update) =>{
        if( !update ){
            Alert.alert("app是最新版了");
        }else {
            Alert.alert("有更新哦");
        }
    });

    CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
      (status) => {
        switch (status) {
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            // this.setState({showDownloadingModal: true});
            // this.refs.modal.open();
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            // this.setState({showInstalling: true});
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            // this.refs.modal.close();
            // this.setState({showDownloadingModal: false});
            break;
        }
      },
      ({ receivedBytes, totalBytes, }) => {
          // this.setState({downloadProgress: receivedBytes / totalBytes * 100});
      }
    );
  }

  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@Route:initialPage');
      if (value !== null) {
        console.log(value);
        this.setState({ firstPage: value });
      } else {
        this.setState({ firstPage: 'intro' });
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
            onBack={() => {}} component={Home} title="Home!!"
            initial={firstPage === 'home'}
          />
          <Scene key="cardDetail" hideNavBar={false} component={Detail} />
        </Scene>
      </RouterWithRedux>
    );
  }
}
