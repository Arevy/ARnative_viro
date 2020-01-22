import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import {DrawerActions} from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (
            <Image source={require('../icons/baseline_track_changes_black_18dp.png')} />
        ),
    }
    render() {
        return (
        <View style={styles.view}>
            <TouchableHighlight onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.touchableHighlight} underlayColor={'rgba(0,0,0,0.8)'}>
                <Text style={styles.open}> OPEN </Text>
            </TouchableHighlight>
            <Text style={styles.text}> This is HomeScreen </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 26,
        color: 'purple',
    },
    touchableHighlight: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
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