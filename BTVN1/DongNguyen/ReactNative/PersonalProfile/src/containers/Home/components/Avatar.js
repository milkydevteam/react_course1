import React, {Component} from 'react';
import {View, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from '../styles/Avatar';
import StorageUtils from '../../../utilities/StorageUtils';
import pickImage from '../../../utilities/pickImage';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    let initName = props.name || 'Your name';
    let initSource = props.src || undefined;
    this.state = {
      name: initName,
      editingName: false,
      avatarSource: initSource,
    };
  }

  componentDidMount() {
    StorageUtils.getData('@name').then(name => {
      if (name) {
        this.setState({name: name});
      }
    });
    StorageUtils.getData('@avatar').then(path => {
      if (path) {
        this.setState({avatarSource: {uri: 'file://' + path}});
      }
    });
  }

  changeName() {
    this.setState({editingName: false});
    StorageUtils.storeData('@name', this.state.name);
  }

  uploadAvatar() {
    pickImage('Pick a picture for your new avatar', (source, path) => {
      StorageUtils.storeData('@avatar', path);
      this.setState({avatarSource: source});
    });
  }

  render() {
    return (
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.uploadAvatar.bind(this)}>
          <View style={styles.avatarBackground} />
          <Image style={styles.avatar} source={this.state.avatarSource} />
        </TouchableOpacity>
        <TextInput
          style={[styles.name, this.state.editingName ? styles.editBox : null]}
          selectTextOnFocus
          editable
          maxLength={100}
          onFocus={() => this.setState({editingName: true})}
          onChangeText={text => this.setState({name: text})}
          onBlur={this.changeName.bind(this)}>
          {this.state.name}
        </TextInput>
      </View>
    );
  }
}
