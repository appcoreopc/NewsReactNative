import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View, Text, StyleSheet, Platform, TouchableOpacity, Image, StatusBar} from 'react-native';

import Home from './home/index';
import Settings from './settings/index';
import About from './about/index';
import DetailNews from './detailnews/index';
import DrawerScreen from './common/drawer';

export const Tabs = createMaterialTopTabNavigator({
    Home: Home,
    Settings: Settings,
    About: About
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen)
    {
        return <Image source={require('../assets/menu-button.png')}/>
    }else{
        return <Image source={require('../assets/left-arrow.png')}/>
    }
}

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Tabs
    }
},{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 320
});

export const StackNavigator = createStackNavigator({    
   // important: key and screen name (i.e. DrawerNavigator)
   // should be same while using the drawer navigator inside stack navigator.
   DrawerNavigator:{
        screen: DrawerNavigator
    },
    DetailNews : { 
        screen : DetailNews
    }
},{
    navigationOptions: ({ navigation }) => ({
        title: 'News App',  // Title to appear in status bar
        headerLeft: 
        <TouchableOpacity  onPress={
            () => {navigation.dispatch(DrawerActions.toggleDrawer())} 
        }>     
         <MenuImage style="styles.bar" navigation={navigation}/>
        </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }        
    })
});


