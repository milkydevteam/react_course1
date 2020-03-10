import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import InfoItem from './src/component/InfoItem';
import StorageUtils from './src/tool/StorageUtils'
import { Icon } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.idCounter = 0;
    this.state = {
        name: "Đông Nguyễn",
        editingName: false,
        backgroundUri: undefined,
        avatarUri: undefined,
        items: [],
    };
  }

  componentDidMount(){

    StorageUtils.getData("@name").then(name => {
      if (name) this.setState({name: name});
    })

    StorageUtils.getData("@idCounter").then(idCounter => {
      if (idCounter) this.idCounter = idCounter;
    })

    StorageUtils.getKeys().then(keys => {
      keys.forEach(key => {
        if (key.startsWith("@info")){// key: @info1, @info2,...
          StorageUtils.getData(key).then(jsonStr => {// jsonStr: JSONString { title: "...", content: "..."}
            let index = parseInt(key.replace("@info",""));
            let data = JSON.parse(jsonStr);
            let array = this.state.items.slice();
            array[index] = <InfoItem id={index} key={index} data={data} removeItem={this.removeItem.bind(this)}/>;
            this.setState({items: array});
          })
        }
      });
    })
  }

  uploadBackground(){
    console.log("uploadBackground")
  }

  uploadAvatar(){
    console.log("uploadAvatar")
  }

  changeName(){
    this.setState({editingName: false});
    StorageUtils.storeData("@name", this.state.name);
  }

  addMoreInfoItem(){
    let index = this.idCounter++;
    let array = this.state.items.slice();
    array[index] = <InfoItem id={index} key={index} removeItem={this.removeItem.bind(this)}/>;
    this.setState({items: array});
    StorageUtils.storeData("@idCounter", this.idCounter.toString());
  }

  removeItem(index){
    let array = this.state.items.slice();
    array.pop(index);
    StorageUtils.removeItem("@info"+index);
    this.setState({items: array});
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
                onBlur={this.changeName.bind(this)}
                >{this.state.name}</TextInput>
          </View>
          <View style={styles.itemList}>
            {this.state.items}
            <TouchableOpacity style={styles.addMoreButton} onPress={this.addMoreInfoItem.bind(this)}>
              <Icon name={"add-circle"}/>
              <Text>Add more information</Text>
            </TouchableOpacity>
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
    width: "100%",
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
    // height: 300,
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
    margin: 10,
  },
  addMoreButton: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  itemList: {
    width: "100%",
    position: "relative",
    top: -100,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

});
