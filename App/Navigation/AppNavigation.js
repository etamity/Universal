import { StackNavigator } from 'react-navigation'
import LoginScreen from 'App/Containers/LoginScreen'
import LaunchScreen from 'App/Containers/LaunchScreen'
import styles from 'App/Navigation/Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
