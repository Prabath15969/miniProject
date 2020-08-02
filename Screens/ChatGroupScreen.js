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

