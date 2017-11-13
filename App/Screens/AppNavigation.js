import { StackNavigator } from 'react-navigation'
import LaunchScreen from 'App/Screens/LaunchScreen'
import LoginScreen from 'App/Screens/AuthScreens/LoginScreen'
import styles from 'App/Navigation/Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
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
