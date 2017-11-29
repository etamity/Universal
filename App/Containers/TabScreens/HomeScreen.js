import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'teaset';
import Parse          from 'parse/react-native';
import AppRedux from 'App/Redux/AppRedux';
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
});

class HomeScreenClass extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    headerTitle: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.app.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenClass)
