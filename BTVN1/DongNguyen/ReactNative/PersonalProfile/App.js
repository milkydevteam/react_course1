import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import InfoItem from './src/component/InfoItem';
import StorageUtils from './src/tool/StorageUtils'
import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.idCounter = 0;
    this.state = {
        name: "Đông Nguyễn",
        editingName: false,
        backgroundSource: require('./src/img/default-background.jpg'),
        avatarSource: require('./src/img/default-avatar.jpeg'),
        items: new Map(),
    };
  }

  componentDidMount(){

    StorageUtils.getData("@name").then(name => {
      if (name) this.setState({name: name});
    })

    StorageUtils.getData("@idCounter").then(idCounter => {
      if (idCounter) this.idCounter = idCounter;
    })

    StorageUtils.getData("@background").then(path => {
      if (path) {
        this.setState({backgroundSource: {uri: "file://" + path}});
      }
    })

    StorageUtils.getData("@avatar").then(path => {
      if (path) {
        this.setState({avatarSource: {uri: "file://" + path}});
      }
    })

    StorageUtils.getKeys().then(keys => {
      keys.forEach(key => {
        if (key.startsWith("@info")){// key: @info1, @info2,...
          StorageUtils.getData(key).then(jsonStr => {// jsonStr: JSONString { title: "...", content: "..."}
            let index = parseInt(key.replace("@info",""));
            let data = JSON.parse(jsonStr);
            this.createItem(index, data);
          })
        }
      });
    })

  }

  pickImage(message, callback){
    options = {
      title: "Select Image",
      customButtons: [
        {
          name: 'customOptionKey',
          title: message,
        }
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let path = response.path;
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        callback(source, path);
      }
    })
  }

  uploadBackground(){
    this.pickImage("Pick a picture for your new background", (source, path) => {
      StorageUtils.storeData("@background", path);
      this.setState({backgroundSource: source});
    });
  }

  uploadAvatar(){
    this.pickImage("Pick a picture for your new avatar", (source, path) => {
      StorageUtils.storeData("@avatar", path);
      this.setState({avatarSource: source});
    });
  }

  changeName(){
    this.setState({editingName: false});
    StorageUtils.storeData("@name", this.state.name);
  }

  createItem(index, data){
    let itemMap = this.state.items;
    itemMap = itemMap.set("@info"+index, 
      <InfoItem id={index} key={index} data={data} removeItem={this.removeItem.bind(this)}/>
    )
    this.setState({items: itemMap});
  }

  addMoreInfoItem(){
    let index = this.idCounter++;
    this.createItem(index);
    StorageUtils.storeData("@idCounter", this.idCounter.toString());
  }

  removeItem(index){
    let itemMap = this.state.items;
    itemMap.delete("@info"+index);
    StorageUtils.removeItem("@info"+index);
    this.setState({items: itemMap});
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.uploadBackground.bind(this)}
            >
              <Image style={styles.backgroundImg} source={this.state.backgroundSource}/>
          </TouchableOpacity>
          <View style={styles.avatarContainer}>
              <TouchableOpacity activeOpacity={0.5}
                onPress={this.uploadAvatar.bind(this)}>
                <View style={styles.avatarBackground}></View>
                <Image style={styles.avatar} source={this.state.avatarSource}/>
              </TouchableOpacity>
              <TextInput style={[styles.name, this.state.editingName?styles.editBox:null]}
                selectTextOnFocus
                editable
                maxLength={100}
                onFocus={() => this.setState({editingName: true})} 
                onChangeText={(text) => this.setState({name: text})}
                onBlur={this.changeName.bind(this)}
                >{this.state.name}</TextInput>
          </View>
          <View style={styles.itemList}>
            {Array.from(this.state.items.values())}
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
