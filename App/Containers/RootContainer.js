import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import AppRedux from 'App/Redux/AppRedux';
// Styles
import styles from './Styles/RootContainerStyles'
import { NavigationActions } from 'react-navigation'
import { ModalIndicator } from 'teaset'

class RootContainer extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    this.props.fetchCurrentUserAction();
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  fetchCurrentUserAction: () => dispatch(AppRedux.fetchCurrentUserAction())
})

export default connect(null, mapDispatchToProps)(RootContainer)
