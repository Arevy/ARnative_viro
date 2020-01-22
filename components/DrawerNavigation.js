import React, { Component } from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import { Dimensions } from 'react-native';

const navigatie = createDrawerNavigator({
    Home: {screen: HomeScreen},
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
    Screen3: {screen: Screen3},
    Screen4: {screen: Screen4},
},
{
    initialRouteName: 'Home',
    drawerWidth: 200,
    drawerPosition: 'left',
});

const AppContainer = createAppContainer(navigatie);

export default class DrawerNavigation extends Component {
    render(){
        return <AppContainer/>;
    }
}