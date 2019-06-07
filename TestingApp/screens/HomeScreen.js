import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

import MapView, { Overlay } from 'react-native-maps'

export default class MapTest extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
	<View style= {styles.container}>
        <View style = {styles.map}>
            <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: 33.582869,
                        longitude: -101.884791,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                    >
                    <MapView.Marker
                    coordinate={{longitude:33.582869, latitude:-101.884791}}
                    title={"TTU Rec Lockr Location 1"}
                    description={"This locker is found upstairs."}
                    />
                    
            </MapView>
        </View>

		{/* Logo */}

		<View style={styles.logo}>
		<Image
			style = {{width: 400, height: 250}}
			source = {require('../assets/test.png')}
		/>
		</View>
			{/* Settings icon */}

			<View style = {styles.settings}>
			<TouchableOpacity onPress={() => navigate('Settings')}
			accessibilityLabel = "Click here for the settings" >
			<Image
				style = {{width: 50, height: 50, resizeMode: 'contain'}}
				source = {require('../assets/settingsicon.png')}
			/>
			</TouchableOpacity>
		</View>
		
		{/* Generate QR Button */}

		<View style={styles.generateqrcode}>
		<TouchableOpacity onPress={() => navigate('QRCodeScreen')}
		accessibilityLabel = "Click here to Generate QR Code" >
				<Image
					style = {{width: 400, height: 150, resizeMode: 'contain'}}
					source = {require('../assets/GenerateQRCodeButton.png')}
				/>
		</TouchableOpacity>
		</View>

	</View>
	);
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	generateqrcode: {
		position: 'absolute',
		bottom:0,
	},
	map: {
		position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
	},
	logo: {
		position: 'absolute',
		top: 0,
	},
	settings: {
		position: 'absolute',
		top: 15,
		right: 0,
	},
});

const settingstyle = StyleSheet.create({
  container: {
		position: 'absolute',
		bottom:0,
  },
});
