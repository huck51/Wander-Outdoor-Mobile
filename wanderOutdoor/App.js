import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wander Outdoor!</Text>
        <Text>We are on Slack and Trello now!</Text>
        <Text>Ferda</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(183,216,143)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
