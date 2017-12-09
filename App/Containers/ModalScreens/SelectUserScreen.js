import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ListRow, Label} from 'teaset';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
});

class SelectUserScreenClass extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
      return {
        tabBarLabel: 'Contacts',
        headerTitle: `Contacts`,
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
 componentDidMount(){
     
 }
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <ListRow
            title="Profile Photo"
            detail=""
            accessory={<Image
              style={{ width: 60, height: 60, borderRadius: 5, marginHorizontal: 12 }}
              source={require('../../../assets/avatar/me.jpg')} />} 
            topSeparator="none"
            bottomSeparator="none"
            />
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

export const SelectUserScreen = connect(mapStateToProps, mapDispatchToProps)(SelectUserScreenClass)
