import { StackNavigator } from 'react-navigation'
import MainDrawerScreen from '../Containers/MainDrawerScreen'

import LoginScreen from 'App/Containers/LoginScreen'
import LaunchScreen from 'App/Containers/LaunchScreen'
import styles from 'App/Navigation/Styles/NavigationStyles'

const AppNavigation = StackNavigator({
  MainScreen: { screen: MainDrawerScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default AppNavigation;