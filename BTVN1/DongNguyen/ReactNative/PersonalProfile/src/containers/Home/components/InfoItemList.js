import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../styles/InfoItemList';
import StorageUtils from '../../../utilities/StorageUtils';
import InfoItem from './InfoItem';

export default class InfoItemList extends Component {
  constructor(props) {
    super(props);
    this.idCounter = 0;
    this.state = {
      items: new Map(),
    };
  }

  componentDidMount() {
    StorageUtils.getData('@idCounter').then(idCounter => {
      if (idCounter) {
        this.idCounter = idCounter;
      }
    });

    StorageUtils.getKeys().then(keys => {
      keys.forEach(key => {
        if (key.startsWith('@info')) {
          // key: @info1, @info2,...
          StorageUtils.getData(key).then(jsonStr => {
            // jsonStr: JSONString { title: "...", content: "..."}
            let index = parseInt(key.replace('@info', ''), 10);
            let data = JSON.parse(jsonStr);
            this.createItem(index, data);
          });
        }
      });
    });
  }

  createItem(index, data) {
    let itemMap = this.state.items;
    itemMap = itemMap.set(
      '@info' + index,
      <InfoItem
        id={index}
        key={index}
        data={data}
        removeItem={this.removeItem.bind(this)}
      />,
    );
    this.setState({items: itemMap});
  }

  addMoreInfoItem() {
    let index = this.idCounter++;
    this.createItem(index);
    StorageUtils.storeData('@idCounter', this.idCounter.toString());
  }

  removeItem(index) {
    let itemMap = this.state.items;
    itemMap.delete('@info' + index);
    StorageUtils.removeItem('@info' + index);
    this.setState({items: itemMap});
  }

  render() {
    return (
      <View style={styles.itemList}>
        {Array.from(this.state.items.values())}
        <TouchableOpacity
          style={styles.addMoreButton}
          onPress={this.addMoreInfoItem.bind(this)}>
          <Icon name={'add-circle'} />
          <Text>Add more information</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
