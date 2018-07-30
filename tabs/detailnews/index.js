import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DetailNews extends Component{

  constructor(props) {
    super(props);

    console.log(props);
  }

  loadDetailPage = (newsId) => {    
    // uses id to pull from api //
  }

  render() {
    return (
      <View>
        <Text>
         Loading detail news from newsapi service. Render params :-
         {this.props.navigation.state.params.newsId}
        </Text>
      </View>
    );
  }
}
