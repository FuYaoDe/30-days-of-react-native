import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import Banner from '../components/Banner'
import Card from '../components/Card'
import { Actions } from 'react-native-router-flux';
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

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataSource = ds.cloneWithRows([{
  title: 'Beautiful wave',
  subTitle: 'Curated looks for creatives, pioneers, and individuals!',
  image: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/AOOC3CJARN.jpg' },
  backgroundColor: '#fff',
}, {
  title: 'Beautiful wave',
  subTitle: 'Curated looks for creatives, pioneers, and individuals!',
  image: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/B23METEB9K.jpg' },
  imagePosition: 'right',
}, {
  title: 'Beautiful wave',
  subTitle: 'Curated looks for creatives, pioneers, and individuals!',
  image: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/AOOC3CJARN.jpg' },
  backgroundColor: '#fff',
}, {
  title: 'Beautiful wave',
  subTitle: 'Curated looks for creatives, pioneers, and individuals!',
  image: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/B23METEB9K.jpg' },
}, {
  title: 'Beautiful wave',
  subTitle: 'Curated looks for creatives, pioneers, and individuals!',
  image: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/AOOC3CJARN.jpg' },
  backgroundColor: '#fff',
}, {
  title: 'Beautiful wave',
  subTitle: 'Curated looks for creatives, pioneers, and individuals!',
  image: { uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/B23METEB9K.jpg' },
}]);

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <Banner data={ad} />
        <ListView
          dataSource={dataSource}
          renderRow={(rowData, sectionID, rowID) => <Card
            {...rowData}
            imagePosition={rowID % 2 === 1 ? 'right' : 'left'}
            onPress={() => Actions.cardDetail({ ...rowData })}
          />}
        />
      </View>
    );
  }
}
