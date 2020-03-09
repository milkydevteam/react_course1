import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { render } from 'react-dom';
import InfoItem from './src/component/InfoItem';
import StorageUtils from './src/tool/AsynStorageUtils'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Đông Nguyễn",
        editingName: false,
    };
  }

  componentDidMount(){
    // StorageUtils.storeData("a", "b");
  }

  uploadBackground(){
    console.log("uploadBackground")
  }

  uploadAvatar(){
    console.log("uploadAvatar")
  }

  renderInfoItems(){

  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.uploadBackground}
            >
              <Image style={styles.backgroundImg} source={require('./src/img/default-background.jpg')}/>
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
              <TouchableOpacity activeOpacity={0.5}
                onPress={this.uploadAvatar}>
                <View style={styles.avatarBackground}></View>
                <Image style={styles.avatar} source={require('./src/img/default-avatar.jpeg')}/>
              </TouchableOpacity>
              <TextInput style={[styles.name, this.state.editingName?styles.editBox:null]}
                selectTextOnFocus
                editable
                maxLength={100}
                onTouchStart={() => this.setState({editingName: true})} 
                onChangeText={(text) => this.setState({name: text})}
                onBlur={() => this.setState({editingName: false})}
                >{this.state.name}</TextInput>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  scrollView: {
    width: "100%"
  },  
  backgroundImg:{
    width: "100%",
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  avatarContainer: {
    height: 300,
    alignItems: "center",
    position: "relative",
    top: -100,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 5,
  },
  editBox: {
    borderColor: "#27a135",
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10
  },

});
