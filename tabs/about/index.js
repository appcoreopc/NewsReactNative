import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text, Button, FlatList,
  View, Image, Linking
} from 'react-native';


import { NavigationActions } from 'react-navigation';
import { List, ListItem, SearchBar } from "react-native-elements";
import { Icon, Card} from 'react-native-elements';

class About extends Component{
  
  render() {
    
    return (
     <View style={styles.mainContainer}>     
          <View style={styles.tabBarInfoContainer}>        

              <Icon
              raised 
              name='image'
              type='font-awesome'
              color='#ebebeb' size={70}
              />

         <Text style={styles.paragraph}>
          Free internet news app.
        </Text>

        <Text style={styles.paragraphsecond}>
          @developed by appcore@
        </Text>
    </View>
  </View>

    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

  paragraphsecond: {
    margin: 2,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e0e0e0',
  },
  tabBarInfoContainer: {
    flex : 1, 
    flexDirection : 'column',
    justifyContent : 'center',
    alignContent : 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 0,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 30,
  }, 
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: '#fbfbfb'
  }
});


export default About;