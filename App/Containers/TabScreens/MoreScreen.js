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

  }
  _logoutAction() {
    ModalIndicator.show('Loading ...');
    Parse.User.logOut().then(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'LaunchScreen' })
        ]
      });
      this.props.navigation.dispatch(resetAction);
      ModalIndicator.hide();
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <ListRow
            title="Joey"
            detail="SwapAnt ID: 12345"
            titlePlace="top"
            accessory="indicator"
            topSeparator="none"
            bottomSeparator="none"
            icon={<Image
              style={{ width: 60, height: 60, borderRadius: 5, marginHorizontal: 12 }}
              source={require('../../../assets/avatar/me.jpg')} />} />
          <View style={{backgroundColor: Colors.transparent, height:16}}/>
          <ListRow
            title='Settings' icon={<Ionicons style={{ marginHorizontal: 16 }} size={26} name="md-settings" color={Colors.fire} />}
            topSeparator="none"
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const MoreScreen = connect(mapStateToProps, mapDispatchToProps)(MoreScreenClass)
