import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Ionicons from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
  ...ApplicationStyles.screen
});

class ProfileScreenClass extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
      return {
        tabBarLabel: 'Profile',
        headerTitle: `${navigation.state.params.userId}`,
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
          name={focused ? 'ios-profile' : 'ios-profile-outline'}
          size={26}
          style={{ color: tintColor }}
        />
        ),
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Profile</Text>
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

export const ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(ProfileScreenClass)
