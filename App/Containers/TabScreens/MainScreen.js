import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'teaset';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
});

class MainScreenClass extends Component {
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

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>MainScreen</Text>
          <Button type='primary' size='md' title='Primary' onPress={() => this.props.navigation.navigate('ProfileScreen', { userId: '0101010' })} />
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

export const MainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreenClass)
