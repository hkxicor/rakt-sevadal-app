import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Button, Image, Keyboard, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputBox from '../../Components/Input-Box/inputBox';
import { Icons } from 'react-native-fontawesome';
import { MESSAGE_BAR } from '../../Constants/global.constant';
import firebase from 'react-native-firebase';
import COLORS from '../../Constants/color.constant';

MODES = ['MOBILE_NUMBER_INPUT', 'OTP_INPUT'];

class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            otp: '',
            bottomStickButtonVisible: true,
            mode: MODES[0],
            isProcessing: false,
            confirmResult: null
        };
    }

    componentWillMount = () => {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    };

    componentWillUnmount = () => {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    };

    _keyboardDidShow = () => {
        this.setState({ bottomStickButtonVisible: false });
    };

    _keyboardDidHide = () => {
        this.setState({ bottomStickButtonVisible: true });
    };

    RenderForm = () => {
        const { mode } = this.state;
        switch (mode) {
            case MODES[0]:
                return this.RenderMobileInputForm();
                break;
            case MODES[1]:
                return this.RenderOTPInputForm();
                break;
            default:
                return null;
        }
    };

    RenderMobileInputForm = () => {
        const { mobile, mode } = this.state;
        return (
            <InputBox
                value={mobile}
                placeholder={'Enter mobile number'}
                icon={Icons.mobile}
                keyboardType={'numeric'}
                maxLength={10}
                onChangeText={mobile => this.setState({ mobile })}
            />
        );
    };

    RenderOTPInputForm = () => {
        const { mobile, otp, isProcessing, mode } = this.state;
        return (
            <View>
                <InputBox
                    value={mobile}
                    placeholder={'Enter mobile number'}
                    icon={Icons.user}
                    keyboardType={'numeric'}
                    maxLength={10}
                    onChangeText={mobile => this.setState({ mobile })}
                    editable={mode != MODES[0]}
                />
                <InputBox
                    value={otp}
                    placeholder={'Enter One Time Password'}
                    icon={Icons.lock}
                    keyboardType={'numeric'}
                    onChangeText={otp => this.setState({ otp })}
                />
            </View>
        );
    };

    submit = async () => {
        const { mode, mobile, otp } = this.state;
        switch (mode) {
            case MODES[0]:
                this.setState({ isProcessing: true });
                firebase.auth().signInWithPhoneNumber(`+91${mobile}`).then((confirmResult) => {
                    MESSAGE_BAR.alertWithType('success', 'OTP Sent', '');
                    this.setState({ isProcessing: false, mode: MODES[1], confirmResult });
                }).catch(() => {
                    this.setState({ isProcessing: false });
                    MESSAGE_BAR.alertWithType('errir', 'Something went wrong', '');
                });
                break;
            case MODES[1]:
                this.setState({ isProcessing: true });
                this.confirmResult.confirm(otp)
                    .then(user => { console.log('user', user) })
                break;
            default:
                return null;
        }
    };

    render() {
        const { mode, bottomStickButtonVisible, isProcessing } = this.state;

        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
                <Image
                    source={require('../../../assets/playstore-icon.png')}
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: 'contain',
                    }}
                />
                {this.RenderForm()}
                {bottomStickButtonVisible && (
                    <TouchableOpacity
                        style={{ position: 'absolute', bottom: 0, width: 360, height: 50, backgroundColor: COLORS.PrimaryDark, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => this.submit()}

                    >
                        <Text style={{ fontWeight: '500', color: COLORS.Text }}>{mode == MODES[0] ? 'Send OTP' : 'Verify OTP'}</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        );
    }
}

export default LoginScene;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    inputContainerStyle: {
        margin: 8,
    },
});
