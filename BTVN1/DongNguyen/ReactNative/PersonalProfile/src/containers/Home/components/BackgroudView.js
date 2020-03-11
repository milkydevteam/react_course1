import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from '../styles/BackgroundView';
import pickImage from '../../../utilities/pickImage';
import StorageUtils from '../../../utilities/StorageUtils';

export default class BackgroudView extends Component {
  constructor(props) {
    super(props);
    let initSource = props.src || undefined;
    this.state = {
      backgroundSource: initSource,
    };
  }

  componentDidMount() {
    StorageUtils.getData('@background').then(path => {
      if (path) {
        this.setState({backgroundSource: {uri: 'file://' + path}});
      }
    });
  }

  uploadBackground() {
    pickImage('Pick a picture for your new background', (source, path) => {
      StorageUtils.storeData('@background', path);
      this.setState({backgroundSource: source});
    });
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.uploadBackground.bind(this)}>
        <Image
          style={styles.backgroundImg}
          source={this.state.backgroundSource}
        />
      </TouchableOpacity>
    );
  }
}
