import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, FlatList, 
  View
} from 'react-native';

import { List, ListItem, SearchBar } from "react-native-elements";
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions, NavigationActions } from 'react-navigation';

// do not use {} here - no need to deconstruct it //
import NewsApiService from '../../services/news';

export default class Home extends Component{

  constructor(props) {

    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  navigateToScreen = (route) => () => {

    console.log(route);
    const navigateAction = NavigationActions.navigate({
      routeName: 'DetailNews',
      params : { newsUrl : route }
    });
    this.props.navigation.dispatch(navigateAction);   
  
  }
  
  // async getNewsFeed() 
  // {
  //   let apiUri = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22f66588d55e4db88dabda8f03aa598c";
    
  //   obj = new NewsApiService();
  //   obj.getNewsFeed();
  // }
  

  async getNewsFeed() 
  {
    let apiUri = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22f66588d55e4db88dabda8f03aa598c";

    try {
      let response = await fetch(apiUri);
      let responseJson = await response.json();
      
      this.setState({ 
        data : responseJson.articles
      });
            
      return responseJson.articles;
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() { 
    
    this.getNewsFeed();     
  }
  
  render() {
    return (

      <FlatList
        data={this.state.data}
        keyExtractor={item => item.id}
         renderItem={({ item }) => (
          <ListItem 
            roundAvatar onPress={this.navigateToScreen(item.url)}
            title={`${item.title} `}
            subtitle={item.description}
            avatar={{ uri: item.urlToImage }}
          />
        )}
      />
    );
  }
}

