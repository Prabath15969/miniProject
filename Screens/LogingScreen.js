import React, { Component } from "react";
import { firebaseAuth } from "./../environment/Config";

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default class loginScreen extends React.Component {
  state = {
    email: "",
    password: "",
  };

  continue = () => {
    firebaseAuth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Chat"))
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  back = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 80 }}>
          <Image
            source={require("../assets/chat.png")}
            style={{ width: 180, height: 100, alignSelf: "center" }}
          />
        </View>

        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={(email) => {
              this.setState({ email });
            }}
            value={this.state.email}
          />
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Password</Text>
          <TextInput
            textContentType="password"
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => {
              this.setState({ password });
            }}
            value={this.state.password}
          />
        </View>
        <View>
          <View style={{ alignItems: "flex-start", margin: 30 ,width : 40 }}>
            <TouchableOpacity style={styles.continue} onPress={this.back}>
              <Text style={{ fontSize: 20 }}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "flex-end", margin: 30 }}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Text style={{ fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F5F7",
  },

  header: {
    fontSize: 20,
    color: "black",
  },
  input: {
    fontSize: 18,
    marginTop: 5,
    height: 40,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  continue: {
    width: 100,
    height: 50,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
});
