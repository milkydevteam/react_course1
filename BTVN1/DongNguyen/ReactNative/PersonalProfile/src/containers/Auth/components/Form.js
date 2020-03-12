import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles/Form';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StorageUtils from '../../../utilities/StorageUtils';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      isLoading: false,
    };
  }

  clientVerify(username, password) {
    return username && password;
  }

  userLogin() {
    let username = this.state.username;
    let password = this.state.password;
    if (!this.state.isLoading && this.clientVerify(username, password)) {
      const {loginCallback} = this.props;
      this.setState({isLoading: true}, () => {
        fetch('http://myweb/login.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(responseData => {
            if (responseData.identify_token) {
              console.log('Login successfully!');
              StorageUtils.storeData('id_token', responseData.identify_token);
              if (loginCallback) {
                loginCallback();
              }
            }
            //show login faild message
            console.log('Login faild!');
            this.setState({isLoading: false});
          })
          .catch(error => {
            console.log(error);
          });
      });
      // consider login successfully
      console.log('Login successfully!');
      StorageUtils.storeData('id_token', 'ed076287532e86365e841e92bfc50d8c');
      if (loginCallback) {
        loginCallback();
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          editable
          maxLength={50}
          value={this.state.username}
          onChangeText={text => this.setState({username: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          editable
          secureTextEntry
          maxLength={50}
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.userLogin.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
