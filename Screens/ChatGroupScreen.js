import React, { Component } from "react";
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