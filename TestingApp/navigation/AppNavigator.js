import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import QRCodeScreen from '../screens/QRCodeScreen.js';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: ({navigation}) => ({header: null})},
  Settings: {screen: SettingScreen},
  QRCodeScreen: {screen: QRCodeScreen},
});

const App = createAppContainer(AppNavigator);

export default App;