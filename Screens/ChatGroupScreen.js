import React, { Component } from "react";
import { firebaseAuth } from "./../environment/Config";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class ChatScreen extends React.Component {
  logout = () => {
    firebaseAuth.signOut();
    // this.props.navigation.navigate("Login");
  };import React, { Component } from "react";
  import { firebaseAuth } from "./../environment/Config";
  import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
  
  export default class ChatScreen extends React.Component {
    logout = () => {
      firebaseAuth.signOut();
      // this.props.navigation.navigate("Login");
    };
  
    componentDidMount() {
      const user = firebaseAuth.currentUser;
      console.log(user)
    }
  
    chatScreen = () => {
      this.props.navigation.navigate("ChatBody");
    };
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.topbar}>
            <Text
              style={{
                fontSize: 20,
                padding: 10,
                alignSelf: "flex-start",
                position: "absolute",
              }}
            >
              {this.user}
            </Text>
            <TouchableOpacity
              onPress={this.logout}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={{ fontSize: 16, padding: 12 }}>LogOut</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <TouchableOpacity onPress={this.chatScreen}>
              <View style={styles.chat}>
                <Text>ChatNo 1</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
    },
    topbar: {
      backgroundColor: "cyan",
      height: 50,
    },
    chat: {
      backgroundColor: "pink",
      height: 75,
      marginTop: 1,
    },
    body: {
      backgroundColor: "white",
    },
  });