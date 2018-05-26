
/**
 * Name: Input Box Component
 * Description: Render Input Box
 * > you can set icon for input field by passing props icon as image source
 * > for password fields pass sucure props as true
 * NOTE: this component also accept 'autoFocus' props, which is used to bring focus of input box automatically
 */
import React, { Component } from 'react';
import { TouchableOpacity, Image, TextInput, View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSecureEntry: props.secure,
        };
        this.toggleSecureEntry = this.toggleSecureEntry.bind(this);
    }

    componentDidMount() {
        if (this.inputRef) {
            this.inputRef();
        }
    }

    toggleSecureEntry() {
        const { isSecureEntry } = this.state;
        this.setState({ isSecureEntry: !isSecureEntry });
    }

    grabFocus(refval) {
        const { autoFocus } = this.props;
        if (autoFocus) {
            this.inputRef = refval;
        }
    }


    render() {
        const { icon, secure, success, width, button } = this.props;
        const WIDTH = width || 320;
        const { isSecureEntry } = this.state;
        return (
            <View style={{ backgroundColor: '#fff', width: WIDTH, height: 48, borderColor: '#c3c3c3', flexDirection: 'row', alignItems: 'center', borderRadius: 2, marginBottom: 5, borderWidth: 1, marginTop: 7 }}>
                {
                    icon ?
                        <View style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 18, marginRight: 18 }}>
                            <FontAwesome style={{ fontFamily: 'fontawesome', fontSize: 20 }}>{icon}</FontAwesome>
                        </View> : null
                }
                <TextInput
                    {...this.props}
                    getRef={this.grabFocus.bind(this)}
                    secureTextEntry={isSecureEntry}
                    style={{ width: WIDTH - (icon ? 100 : 40), height: 48, fontSize: 16, paddingLeft: 10 }}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderStyle={{ color: '#FF818181', fontWeight: '300', }}
                />
                {
                    secure &&
                    <TouchableOpacity
                        style={{ width: getRelativeSizeWidth(25), height: getRelativeSizeHeight(25), justifyContent: 'center', alignItems: 'center' }}
                        onPress={this.toggleSecureEntry}
                    >
                        <FontAwesome style={{ fontFamily: 'fontawesome', fontSize: 20 }}>{isSecureEntry ? Icons.eye : Icons.eyeSlash}</FontAwesome>
                    </TouchableOpacity>
                }
                {
                    success &&
                    <FontAwesome style={{ fontFamily: 'fontawesome', fontSize: 20, color: 'green' }}>{Icons.tick}</FontAwesome>
                }
                {
                    button &&
                    <TouchableOpacity
                        style={{ width: getRelativeSizeWidth(25), height: getRelativeSizeHeight(25), justifyContent: 'center', alignItems: 'center' }}
                        onPress={button.onPress}
                    >
                        <FontAwesome style={{ fontFamily: 'fontawesome', fontSize: 20 }}>{button.icon}</FontAwesome>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}