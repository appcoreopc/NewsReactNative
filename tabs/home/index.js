import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Home extends Component{

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);   
  }

  render() {
    return (
      <View>
        <Text>  Home    </Text>
      </View>
    );
  }
}

