import React, { Component } from "react";
import { firebaseAuth } from "./../environment/Config";
import { View , Image } from "react-native";

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ marginTop: 80 }}>
          <Image
            source={require("../assets/chat.png")}
            style={{ width: 180, height: 100, alignSelf: "center" }}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "Chat" : "Login");
    });
  }
}
