import { StackNavigator } from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import LoginScreen from 'App/Containers/LoginScreen'
import LaunchScreen from 'App/Containers/LaunchScreen'
import styles from 'App/Navigation/Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MainScreen: { screen: MainScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
