import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
// import {DrawerAction} from 'react-navigation';
//import { Icon } from 'react-native-elements';

export default class Screen4 extends Component {
    static navigationOptions = {
        drawerLabel: 'Mode 2',
        drawerIcon: () => (
            <Image source={require('../icons/baseline_track_changes_black_18dp.png')} />
        ),
    }
    render() {
        return (
        <View style={styles.view}>
        <Text style={styles.text}> This is Screen 1</Text>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()}
            style={styles.touchableHighlight} underlayColor={'#9966ff'}>
                <Text style={styles.text}> Go Back </Text>
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    touchableHighlight: {
        backgroundColor: 'orange',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: 10,
        top: 10,
    },
    open: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});