import React, {Component} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import StorageUtils from '../../../utilities/StorageUtils';
import styles from '../styles/InfoItem';

class InfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title',
      content: 'Content',
      editingTitle: false,
      editingContent: false,
    };
    const {data, id} = this.props; // data: Object{title, content}, id: (Number)index
    if (data) {
      this.state.title = data.title || 'Title';
      this.state.content = data.content || 'Content';
    } else {
      this.saveDataAsJsonStr(id);
    } // first sava for new item
  }

  saveDataAsJsonStr(index) {
    let jsonData = JSON.stringify({
      title: this.state.title,
      content: this.state.content,
    });
    StorageUtils.storeData('@info' + index, jsonData);
  }

  saveTitle(index) {
    this.saveDataAsJsonStr(index);
    this.setState({editingTitle: false});
  }
  saveContent(index) {
    this.saveDataAsJsonStr(index);
    this.setState({editingContent: false});
  }

  render() {
    const {removeItem, id} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.leftTitleContainer}>
            <TextInput
              style={[
                styles.title,
                this.state.editingTitle ? styles.editBox : null,
              ]}
              editable
              maxLength={50}
              selectTextOnFocus
              onFocus={() => {
                this.setState({editingTitle: true});
              }}
              onChangeText={text => this.setState({title: text})}
              onBlur={() => this.saveTitle(id)}>
              {this.state.title}
            </TextInput>
          </View>
          <TouchableOpacity
            stype={styles.deleteButton}
            onPress={() => removeItem(id)}>
            <Icon name={'clear'} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={[
            styles.content,
            this.state.editingContent ? styles.editBox : null,
          ]}
          editable
          maxLength={400}
          selectTextOnFocus
          onFocus={() => {
            this.setState({editingContent: true});
          }}
          onChangeText={text => this.setState({content: text})}
          onBlur={() => this.saveContent(id)}>
          {this.state.content}
        </TextInput>
      </View>
    );
  }
}

export default InfoItem;
