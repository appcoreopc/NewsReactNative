import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Button,
  View, Image
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

class About extends Component{
  
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
     routeName: route,
     params: { newsId : 'Hello' }
    });
  
    this.props.navigation.dispatch(navigateAction);   
  }

  render() {
    return (
      <View>        
        <Text>About us</Text>
           <Image source={
             require('../../assets/menu-button.png')
             }/>

           
     </View>
    );
  }
}

export default About;