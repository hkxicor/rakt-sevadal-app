
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Button, Image, Keyboard, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import InputBox from '../../Components/Input-Box/inputBox';
import { Icons } from 'react-native-fontawesome';
import COLORS from '../../Constants/color.constant';
import firebase from 'react-native-firebase';
import GLOBAL from '../../Constants/global.constant';

class EnterPincode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
        }
    }

    select = (item) => {
        const user = GLOBAL.FIREBASE_USER;
        firebase.firestore()
    }

    render() {
        const { options } = this.state;

        return (
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.container}
            >
                {
                    options.map((item) => {
                        return (
                            <TouchableOpacity
                                onPress={() => this.select(item)}
                            >
                                <View
                                    style={{ width: 360, height: 50, borderBottomWidth: 1, borderBottomColor: COLORS.Divider, justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ fontWeight: '500', color: COLORS.PrimaryDark, fontSize: 16 }}>{item.name}, {item.district}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <TouchableOpacity
                    style={{ position: 'absolute', bottom: 0, width: 360, height: 50, backgroundColor: COLORS.PrimaryDark, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => this.submit()}

                >
                    <Text style={{ fontWeight: '500', color: COLORS.Text }}>Proceed</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default EnterPincode;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
    inputContainerStyle: {
        margin: 8,
    },
});
