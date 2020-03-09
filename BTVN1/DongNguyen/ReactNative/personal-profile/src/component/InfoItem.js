import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

class InfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "Title",
        content: "Content",
        editingTitle: false,
        editingContent: false,
    };
    const {data} = this.props;
    if (data) {
        this.state.title = data.title || "Title";
        this.state.content = data.content || "Content";
    }
  }

  editTitle(text){
    this.setState({title: text})
  }
  editContent(text){
    if (!this.state.editingContent) this.setState({editingContent: true});
    this.setState({content: text})
  }


  removeItem(){
    console.log("removeItem")
  }



  render() {
    console.log(this.state.title, this.state.content);
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
                        onBlur={() => this.setState({editingTitle: false})}
                    >{this.state.title}</TextInput>  
            </View>
            <TouchableOpacity stype={styles.deleteButton} onPress={this.removeItem}>
                <Icon name={"clear"}/>
            </TouchableOpacity>
        </View>
        <TextInput style={[styles.content, this.state.editingContent?styles.editBox:null]} 
            editable 
            maxLength={400}
            selectTextOnFocus
            onTouchStart={() => {this.setState({editingContent: true})}}
            onChangeText={(text) => this.setState({content: text})}
            onBlur={() => this.setState({editingContent: false})}
            >{this.state.content}</TextInput>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
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
