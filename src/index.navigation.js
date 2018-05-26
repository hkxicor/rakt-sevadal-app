import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';

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

import LoginScene from './Scenes/LoginScene/login.scene';

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
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

export default class RootNavigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                                <Scene key="launch" component={LoginScene} title="Launch" initial />
                            </Stack>
                        </Lightbox>
                    </Modal>
                </Overlay>
            </Router>
        )
    }
}