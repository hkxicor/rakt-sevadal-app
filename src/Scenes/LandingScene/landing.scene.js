import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import COLORS from '../../Constants/color.constant';
import firebase from 'react-native-firebase';

const { width, height } = Dimensions.get('window');

export default class ProfileScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: true,
        };
    }

    componentDidMount = async () => {
        
    };

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={require('../../../assets/paystore-icon.png')}
                        style={{ width: 150, height: 150, margin: 20, resizeMode: 'contain' }}
                    />
                    <ActivityIndicator size="large" color={COLORS.Accent} />
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width,
        height,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonCircle: {
        position: 'absolute',
        bottom: 25,
        width: 250,
        height: 70,
        borderRadius: 35,
        elevation: 3,
        left: width / 5,
        flexDirection: 'row',
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftButton: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 35,
        borderBottomStartRadius: 35,
    },
    rightButton: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 35,
        borderBottomEndRadius: 35,
    },
    textOne: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});
