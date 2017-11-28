import { StackNavigator } from 'react-navigation'
import MainTabScreen from '../Containers/MainTabScreen'
import MainStackScreen from '../Containers/MainStackScreen'
import MainDrawerScreen from '../Containers/MainDrawerScreen'

import LoginScreen from 'App/Containers/LoginScreen'
import LaunchScreen from 'App/Containers/LaunchScreen'
import styles from 'App/Navigation/Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MainDrawerScreen: { screen: MainDrawerScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainDrawerScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})
export default PrimaryNav
