import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Button, FlatList,
  View, Image, Linking
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { List, ListItem, SearchBar } from "react-native-elements";

class About extends Component{
  
  render() {
    
    return (
      <View>        
      
      <ListItem 
      roundAvatar 
      title='Auto'
      subtitle='Auto Update Subtitle' hideChevron='true'     
      />     
      
      <ListItem 
      roundAvatar 
      title='Auto'
      subtitle='Auto Update Subtitle' hideChevron='true' 
      />     
      
      <ListItem 
      roundAvatar 
      title='Auto'
      subtitle='Auto Update Subtitle' hideChevron='true' 
      />     
      
      </View>
    );
  }
}

export default About;