import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListRow } from 'teaset';
import Parse from 'parse/react-native';
import { Button, ModalIndicator } from 'teaset'
import { NavigationActions } from 'react-navigation'
import LoginFormRedux from 'App/Redux/LoginFormRedux'

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
});

class MoreScreenClass extends Component {
  static navigationOptions = {
    tabBarLabel: 'More',
    headerTitle: 'More',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-more' : 'ios-more-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  constructor(props) {
    super(props);
    this._logoutAction = this._logoutAction.bind(this);
    this._getUsername = this._getUsername.bind(this);
    this._getUserId = this._getUserId.bind(this);
    this._settingsAction = this._settingsAction.bind(this);
    this._goToProfileScreen = this._goToProfileScreen.bind(this);
    
  }
  _logoutAction() {
    ModalIndicator.show('Logout ...');
    this.props.logOut();
  }
  _getUsername(){ 
    return Parse.User.current() && Parse.User.current().get('username') && Parse.User.current().get('displayName') || '';
  }
  _getUserId(){
    return Parse.User.current() && Parse.User.current().id || ''
  }
  _settingsAction() {
    console.log(this.props.currentUser, Parse.User.current());
  }

  _goToProfileScreen() {
    //console.log(this.props.currentUser, Parse.User.current());
    this.props.navigation.navigate('ProfileScreen', {displayName: this._getUsername()});
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <ListRow
            title={this._getUsername()}
            detail={`SwapAnt ID: ${this._getUserId()}`}
            titlePlace="top"
            accessory="indicator"
            topSeparator="none"
            bottomSeparator="none"
            onPress={this._goToProfileScreen}
            icon={<Image
              style={{ width: 60, height: 60, borderRadius: 5, marginHorizontal: 12 }}
              source={require('../../../assets/avatar/me.jpg')} />} />
          <View style={{backgroundColor: Colors.transparent, height:16}}/>
          <ListRow
            title='Settings' icon={<Ionicons style={{ marginHorizontal: 16 }} size={26} name="md-settings" color={Colors.fire} />}
            topSeparator="none"
            onPress={this._settingsAction}
            accessory="indicator" />
          <ListRow
            title='Logout' icon={<Ionicons style={{ marginHorizontal: 16 }} size={26} name="md-power" color={Colors.fire} />} onPress={this._logoutAction} bottomSeparator="none"
            accessory="indicator"/>
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
    logOut: () =>  dispatch(LoginFormRedux.logoutRequest())
  }
}

export const MoreScreen = connect(mapStateToProps, mapDispatchToProps)(MoreScreenClass)
