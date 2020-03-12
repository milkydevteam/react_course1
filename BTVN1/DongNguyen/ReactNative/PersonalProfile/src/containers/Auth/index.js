import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Form from './components/Form';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToHome() {
    // invoke when login successfully
    const gotTokenCallback = this.props.navigation.getParam('gotTokenCallback');
    if (gotTokenCallback) {
      gotTokenCallback();
    }
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Please login to edit your own profile
        </Text>
        <Form loginCallback={this.goToHome.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 30,
  },
});
