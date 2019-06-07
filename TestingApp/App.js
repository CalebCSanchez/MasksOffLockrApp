import React from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import AppNavigator from './navigation/AppNavigator.js';

export default class App extends React.Component {
  render() {
    return (
      <View style= {styles.container}>
			<AppNavigator />
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
  },
});
