import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList  } from 'react-native';

export default class NewsApiService 
{   

  constructor() { }

  async getNewsFeed() 
  {
    let apiUri = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22f66588d55e4db88dabda8f03aa598c";

    try {
      let response = await fetch(apiUri);
      let responseJson = await response.json();
      await alert(responseJson.totalResults);
      await alert(responseJson.articles[0].title);
            
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }
}


