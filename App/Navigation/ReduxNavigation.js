import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
 import AppNavigation from 'App/Navigation/AppNavigation'
import { StackNavigator } from 'react-navigation'
import MainTabScreen from '../Containers/MainTabScreen'
import MainStackScreen from '../Containers/MainStackScreen'
import MainDrawerScreen from '../Containers/MainDrawerScreen'

import LoginScreen from 'App/Containers/LoginScreen'
import LaunchScreen from 'App/Containers/LaunchScreen'
import styles from 'App/Navigation/Styles/NavigationStyles'

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })
  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ 
  nav: state.nav
 })
export default connect(mapStateToProps)(ReduxNavigation)
