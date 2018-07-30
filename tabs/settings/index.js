import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, FlatList,
  View
} from 'react-native';

import { List, ListItem, SearchBar } from "react-native-elements";


export default class Settings extends Component{
  render() {
    
    return (
      <View>        
      
      <ListItem 
      roundAvatar 
      title='Notification'
      subtitle='Notify user with news' hideChevron='true' 
      />     
      
      <ListItem 
      roundAvatar 
      title='Offline browsing'
      subtitle='Enable offline browsing' hideChevron='true' 
      />     
      
      <ListItem 
      roundAvatar 
      title='Filter'
      subtitle='Setup news filter' hideChevron='true' 
      />     
      
      </View>
    );
  }
}

