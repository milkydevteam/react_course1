import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import BackgroudView from './components/BackgroudView';
import InfoItemList from './components/InfoItemList';
import Avatar from './components/Avatar';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <BackgroudView
            src={require('../../assets/images/default-background.jpg')}
          />
          <Avatar
            src={require('../../assets/images/default-avatar.jpeg')}
            name={'Đông Nguyễn'}
          />
          <InfoItemList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    width: '100%',
  },
});
