import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, FlatList, View} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { List, ListItem, SearchBar } from "react-native-elements";

class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }
  
  render () {
    return (
      
      <View>        
      
      <ListItem 
      roundAvatar 
      title='Home' onPress={this.navigateToScreen('Home')}
      subtitle='Home' hideChevron='true' 
      />     
      
      <ListItem 
      roundAvatar 
      title='Settings' onPress={this.navigateToScreen('Settings')}
      subtitle='settings' hideChevron='true' 
      />     
      
      <ListItem 
      roundAvatar 
      title='About' onPress={this.navigateToScreen('About')}
      subtitle='About' hideChevron='true' 
      />     
      
      </View>      
      
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
