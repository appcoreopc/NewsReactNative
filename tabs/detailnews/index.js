import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, WebView
} from 'react-native';


export default class DetailNews extends Component{

  constructor(props) {
    super(props);    
  }

  componentDidMount() { 
  }
  
  loadDetailPage = (newsId) => {    
    // uses id to pull from api //
  }

  render() {
    return (
      <View style={styles.container}>
     
        <WebView source={{uri : this.props.navigation.state.params.newsUrl}}
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
    alignSelf: 'stretch',
    width: 320,
    flex: 1
  }
});