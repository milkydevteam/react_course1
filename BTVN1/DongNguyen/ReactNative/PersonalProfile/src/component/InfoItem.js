import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import StorageUtils from '../tool/StorageUtils'

class InfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "Title",
        content: "Content",
        editingTitle: false,
        editingContent: false,
    };
    const {data, id} = this.props; // data: Object{title, content}, id: (Number)index
    if (data) {
      this.state.title = data.title || "Title";
      this.state.content = data.content || "Content";
    } else this.saveDataAsJsonStr(id); // first sava for new item
  }

  saveDataAsJsonStr(index){
    let jsonData = JSON.stringify({
      title: this.state.title,
      content: this.state.content,
    })
    StorageUtils.storeData("@info"+index, jsonData);
  }

  saveTitle(index){
    this.saveDataAsJsonStr(index);
    this.setState({editingTitle: false});
  }
  saveContent(index){
    this.saveDataAsJsonStr(index);
    this.setState({editingContent: false});
  }



  render() {
    const {removeItem, id} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <View style={{flexDirection:'row',flexWrap: 'wrap',flex: 8}}>
                <TextInput 
                        style={[styles.title, this.state.editingTitle?styles.editBox:null]} 
                        editable
                        maxLength={50}
                        selectTextOnFocus
                        onTouchStart={() => {this.setState({editingTitle: true})}}
                        onChangeText={(text) => this.setState({title: text})}
                        onBlur={() => this.saveTitle(id)}
                    >{this.state.title}</TextInput>  
            </View>
            <TouchableOpacity stype={styles.deleteButton} onPress={() => removeItem(id)}>
                <Icon name={"clear"}/>
            </TouchableOpacity>
        </View>
        <TextInput style={[styles.content, this.state.editingContent?styles.editBox:null]} 
            editable 
            maxLength={400}
            selectTextOnFocus
            onTouchStart={() => {this.setState({editingContent: true})}}
            onChangeText={(text) => this.setState({content: text})}
            onBlur={() => this.saveContent(id)}
            >{this.state.content}</TextInput>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        width: "100%",
        height: "auto",
        borderRadius: 5,
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 2,
        padding: 12,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    editBox: {
        borderColor: "#27a135",
        borderWidth: 2,
        borderRadius: 8,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    content: {
        fontSize: 15,
    },

});

export default InfoItem;
