import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ListRow} from 'teaset';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
});

class SettingsScreenClass extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    headerTitle: 'Settings',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <ListRow title='Show' icon={<Ionicons size={26} name="ios-power"/>} topSeparator='full' bottomSeparator='full' />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const SettingsScreen = connect(mapStateToProps, mapDispatchToProps)(SettingsScreenClass)
