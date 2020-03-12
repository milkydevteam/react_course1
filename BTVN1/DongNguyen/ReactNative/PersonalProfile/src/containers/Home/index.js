import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import BackgroudView from './components/BackgroudView';
import InfoItemList from './components/InfoItemList';
import Avatar from './components/Avatar';
import StorageUtils from '../../utilities/StorageUtils';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasToken: false,
      isLoaded: false,
    };
  }

  componentDidMount() {
    // load and verify id token
    StorageUtils.getData('id_token').then(idToken => {
      if (this.verifyToken(idToken)) {
        this.setState({hasToken: true, isLoaded: true});
      } else {
        this.setState({hasToken: false, isLoaded: true});
      }
    });
  }

  verifyToken(token) {
    //... code to verify id token
    return token ? true : false; //To be exist is enough
  }

  goToLogin() {
    this.props.navigation.navigate('Auth', {
      gotTokenCallback: () => this.setState({hasToken: true}),
    });
  }

  applyViews() {
    if (!this.state.isLoaded) {
      return <ActivityIndicator size="large" />;
    } else {
      return (
        <ScrollView style={styles.scrollView}>
          <BackgroudView
            editable={this.state.hasToken}
            onNotEditable={this.goToLogin.bind(this)}
            src={require('../../assets/images/default-background.jpg')}
          />
          <Avatar
            editable={this.state.hasToken}
            onNotEditable={this.goToLogin.bind(this)}
            src={require('../../assets/images/default-avatar.jpeg')}
            name={'Đông Nguyễn'}
          />
          <InfoItemList
            editable={this.state.hasToken}
            onNotEditable={this.goToLogin.bind(this)}
          />
        </ScrollView>
      );
    }
  }

  render() {
    return <View style={styles.container}>{this.applyViews()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
});
