import React from 'react';
import { Alert, StyleSheet, Text, View, Image, Button } from 'react-native';



export default class SettingScreen extends React.Component {
  render() {
    return (
      <View style= {{alignItems: 'left'}}>
	<Button
        onPress ={() => alert('We are just students trying to pass this class.')}
        title = "About Us"
        color = "#841584"
        accessibilityLabel = "Click here for an About Us."
	/>
  	<Button
        onPress ={() => alert('email us at: maskofflockr@fakeemail.com')}
        title = "Contact Us"
        color = "#841584"
        accessibilityLabel = "Click here to contact us."
	/>
	</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
	resizeMode: 'contain'
  },
});
