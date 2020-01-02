import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from './screens/home'
import { AboutScreen } from './screens/about'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Inicio',
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'Detalle',
      },
    },
  }
);

export default createAppContainer(AppNavigator);