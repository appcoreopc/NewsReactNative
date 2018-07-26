import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';




export default class App extends React.Component {
 

  onPressLearnMore() { 
    console.log('button pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Jeremy open up App.js to start working on your app!</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
