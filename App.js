import React from 'react';
import { Text, View } from 'react-native';
import Navigator from './tabs/home';

export default class App extends React.Component{
  render(){
      return(
          <Navigator/>
      )
  }
}