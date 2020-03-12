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

  startEditName() {
    this.prevName = this.state.name;
    this.setState({editingName: true});
  }

  changeName() {
    const {editable, onNotEditable} = this.props;
    if (editable) {
      StorageUtils.storeData('@name', this.state.name);
      this.setState({editingName: false});
    } else {
      this.setState({name: this.prevName, editingName: false});
      onNotEditable();
    }
  }

  uploadAvatar() {
    const {editable, onNotEditable} = this.props;
    if (editable) {
      pickImage('Pick a picture for your new avatar', (source, path) => {
        StorageUtils.storeData('@avatar', path);
        this.setState({avatarSource: source});
      });
    } else {
      onNotEditable();
    }
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
          onFocus={this.startEditName.bind(this)}
          onChangeText={text => this.setState({name: text})}
          onBlur={this.changeName.bind(this)}>
          {this.state.name}
        </TextInput>
      </View>
    );
  }
}
