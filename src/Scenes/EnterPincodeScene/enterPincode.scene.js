
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Button, Image, Keyboard, View,TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import InputBox from '../../Components/Input-Box/inputBox';
import { Icons } from 'react-native-fontawesome';
import COLORS from '../../Constants/color.constant';

class EnterPincode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pincode: '',
        }
    }

    componentDidMount = () => {
    }

    submit = async () => {
        const { pincode } = this.state;

        fetch(`http://postalpincode.in/api/pincode/${pincode}`).then((result) => {
            return result.json()
        }).then((results) => {
            console.log(results);
            this.setState({ results });
        })
    }

    componentWillMount = () => {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount = () => {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        this.setState({ bottomStickButtonVisible: false });
    }

    _keyboardDidHide = () => {
        this.setState({ bottomStickButtonVisible: true });
    }

    render() {
        const { pincode } = this.state;

        return (
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.container}
            >
                <View style={{ marginTop: 50 }}>
                    <InputBox
                        value={pincode}
                        placeholder={'Enter Pincode'}
                        icon={Icons.user}
                        onChangeText={(pincode) => this.setState({ pincode })}
                    />
                </View>
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
