import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import GLOBAL from './Constants/global.constant';
import firebase from 'react-native-firebase';
import LoginScene from './Scenes/LoginScene/login.scene';
import HomeScene from './Scenes/HomeScene/home.scene';
import EnterPincode from './Scenes/EnterPincodeScene/enterPincode.scene';

const prefix = Platform.OS === 'android' ? 'raktsevadal://raktsevadal/' : 'raktsevadal://';

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});


const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

export default class RootNavigator extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        GLOBAL.MESSAGE_BAR = this.dropdown;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                GLOBAL.FIREBASE_USER = user;
                const uid = user.uid;
                const db = firebase.firestore();
                db.collection("Users").get(uid).then((querySnapshot) => {
                    console.log(querySnapshot[0]);
                });
                Actions.PINCODE_ENTER();
            } else {
                Actions.LOGIN();
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router
                    createReducer={reducerCreate}
                    getSceneStyle={getSceneStyle}
                    uriPrefix={prefix}>

                    <Overlay key="overlay">
                        <Modal key="modal"
                            hideNavBar
                            transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
                        >
                            <Lightbox key="lightbox">
                                <Stack
                                    hideNavBar
                                    key="root"
                                    titleStyle={{ alignSelf: 'center' }}
                                >
                                    <Scene key="LOGIN" component={LoginScene} title="Launch" initial />
                                    <Scene key="PINCODE_ENTER" component={EnterPincode} title="Enter pincode" />
                                    <Scene key="HOME" component={HomeScene} hideNavBar />
                                </Stack>
                            </Lightbox>
                        </Modal>
                    </Overlay>
                </Router>
                <DropdownAlert ref={ref => this.dropdown = ref} onClose={() => { }} />
            </View>
        )
    }
}