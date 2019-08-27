import React from 'react';
import { Platform, TouchableOpacity, TextInput, StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native';

import QRCode from 'react-native-qrcode';



export default class QRCodeScreen extends React.Component {
    constructor(){
        super();
        this.state={
            Text_Holder_1 : '',
            QR_ID : '',
        }
    }
    getTextInputValue=()=>{
        this.setState({Text_Holder_2 : this.state.Text_Holder_1});
    }
    render() {
    const {navigate} = this.props.navigation;
    
    const userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);

    const saveUserId = async userId => {
      try {
        await AsyncStorage.setItem('userId', userId);
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
    };

    const getUserId = async () => {
      let QR_ID = '';
      try {
        QR_ID = await AsyncStorage.getItem('userId') || 'none';
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
    
      return userId;
    }

    return (

    <View style= {styles.MainContainer}>
        {/* <TextInput
          style={styles.TextInputStyle}
          onChangeText={(text) => this.setState({Text_Holder_1: text})}
          underlineColorAndroid = "transparent" 
          placeholder="Enter a password for your QR Code."
        />
 
        <TouchableOpacity onPress={this.getTextInputValue} activeOpacity={0.7} style={styles.button} >
        
        <Text style={styles.TextStyle}> Click Here To Generate QR Code </Text>
 
        </TouchableOpacity> */}

        <View style = {styles.QRcodePosition}>
            <QRCode
                value={this.state.QR_ID}
                size={250}
                bgColor='#000'
                fgColor='#fff'/>
        </View>
        <View style = {styles.testcode}>
            <Text>
             Initial ID {userId}
             Saved ID {this.state.QR_ID}
            </Text>
        </View>
        <View style = {styles.CameraButton}>
          <Button
            onPress= {() => (captureScreen)}
            title = "Save to Camera Roll"
            color = "#841584"
            accessibilityLabel = "Click here for an About Us."
          />
        </View>
	</View>

    );
  }
}

const styles = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      alignItems: 'center'
    
    },
    CameraButton:
    {
      position: 'absolute',
      bottom: 100,
    },
    QRcodePosition:
    {
        position: 'absolute',
        bottom: 300,
    },
    testcode:{
        position: 'absolute',
        bottom:0,

    },
    TextInputStyle: {
   
      width: '100%',
      height: 40,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#F44336',
      textAlign: 'center'
      
    },
   
    button: {
      
      width: '100%',
      paddingTop:8,
      paddingBottom:8,
      backgroundColor: '#009688',
      borderRadius:7,
      marginBottom: 20
    },
   
    TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 18
  }
    
  });