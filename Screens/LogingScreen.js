import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'


export default class loginScreen extends React.Component {

    state = {
        name: ""
    }

    continue = () => {
        this.props.navigation.navigate("Chat", { name: this.state.name })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{ marginTop: 100 }}>
                    <Image
                        source={require("../assets/my.png")}
                        style={{ width: 100, height: 100, alignSelf: "center" }} />
                </View>
                <View style = {{marginHorizontal: 32}}>
                    <Text style = { styles.header}>User Name</Text>
                    <TextInput style = {styles.input} placeholder="Name" onChangeText= {name => { this.setState({name})}} value={this.state.name} />
                </View>
                <View style= {{alignItems:"flex-end", marginTop: 70}}>
                    <TouchableOpacity style={styles.continue} onPress = {this.continue}>
                       

                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    circle: {
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: "cyan",
        position: "absolute",
        left: -50,
        top: 50
    },
    header:{
        
        fontSize: 30,
        color : "black",
        marginTop: 32,
    },
    input:{
        fontSize: 25,
        marginTop: 32,
        height: 50,
        borderStyle :"solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 25,
        padding: 10

    },
    continue: {
        width: 70,
        height: 70,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center"
    }
})
