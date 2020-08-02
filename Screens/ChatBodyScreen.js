import React, { Component } from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

export default class ChatBodyScreen extends React.Component {
  state = {
    msg: "",
  };

  back = () => {
    this.props.navigation.navigate("Chat");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={this.back}>
            <Text style={{ fontSize: 16, padding: 12 }}> back </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 40,
              fontSize: 20,
              padding: 10,
              alignSelf: "flex-start",
              position: "absolute",
            }}
          >
            User Name
          </Text>
        </View>
        {/* -------------------------------body--------------------------------------- */}
        <View style={styles.body}>
          <View style={styles.chat}>
            <Text>{this.state.msg}</Text>
          </View>
        </View>
        {/* ------------------------------------footer------------------------------- */}
        
        <View style={styles.footer}>
          <View
            style={{
              position: "absolute",
              alignSelf: "flex-start",
              width: "85%",
              height: 35,
            }}
          >
            <TextInput
              style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
                height: "100%",
              }}
              placeholder="Enter Your Massege here"
              onChangeText={(msg) => {
                this.setState({ msg });
              }}
              value={this.state.msg}
            />
          </View>
          <View style={{ alignSelf: "flex-end", height: 35, width: "15%" }}>
            <Button title={"Send"} onPress={this.back}></Button>
          </View>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  topbar: {
    backgroundColor: "cyan",
    height: "10%",
  },
  chat: {
    backgroundColor: "pink",
    height: 75,
    marginTop: 1,
  },
  body: {
    backgroundColor: "white",
    height: "80%",
  },
  footer: {
    position: "relative",
    // height: "10%",
    backgroundColor: "white"
  },
});