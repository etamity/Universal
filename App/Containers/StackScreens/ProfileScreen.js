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

class ProfileScreenClass extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
      return {
        tabBarLabel: 'Profile',
        headerTitle: `${navigation.state.params.displayName}`,
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
        <ListRow
            title="Profile Photo"
            detail=""
            accessory={<Image
              style={{ width: 60, height: 60, borderRadius: 5, marginHorizontal: 12 }}
              source={require('../../../assets/avatar/me.jpg')} />} 
            topSeparator="none"
            bottomSeparator="none"
            />
          <View style={{backgroundColor: Colors.transparent, height:16}}/>
          <ListRow
            title='Name' icon={<Ionicons style={{ marginHorizontal: 16 }} size={26} name="md-settings" color={Colors.fire} />}
            topSeparator="none"
            accessory="indicator" />
          <ListRow
            title='SwapAnt ID' icon={<Ionicons style={{ marginHorizontal: 16 }} size={26} name="md-power" color={Colors.fire} />} bottomSeparator="none"
            accessory="indicator"/>
          <ListRow
            title='Gender' icon={<Ionicons style={{ marginHorizontal: 16 }} size={26} name="md-power" color={Colors.fire} />} bottomSeparator="none"
            accessory="indicator"/>
          <ListRow
            title='Location' icon={<Ionicons style={{ marginHorizontal: 16 }} size={26} name="md-power" color={Colors.fire} />}bottomSeparator="none"
            accessory="indicator"/>
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
