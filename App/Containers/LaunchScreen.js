import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import SocialButton from 'App/Components/SocialButton';
import RoundedButton from 'App/Components/RoundedButton';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollScreen from 'App/Components/ScrollScreen';
import { NavigationActions } from 'react-navigation'
// Styles
import styles from './Styles/LaunchScreenStyles';
import { Fonts, Colors, Metrics, Images } from 'App/Themes/';
import { Button, ModalIndicator } from 'teaset'
import Shared from 'App/Lib/Shared';
import Parse          from 'parse/react-native';
import Constants from 'App/Lib/Constants'
export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.doSocialLogin = this.doSocialLogin.bind(this);
    this.showAuthScreen = this.showAuthScreen.bind(this);
  }
  doSocialLogin(type) {
    ModalIndicator.show(`Logining with ${type}`);
    Shared.App.loginWithSocial(type).then(user => {
      if (user) {
        ModalIndicator.hide();
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'MainDrawerScreen'})
          ]
        });
        this.props.navigation.dispatch(resetAction);        
      }
    });
  }
  showAuthScreen(type) {
    this.props.navigation.navigate('LoginScreen', {type})
  }
  render () {

    return (
      <ScrollScreen>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
          </View>
          <View style={styles.sectionRow} >
            <RoundedButton text="Login" style={{backgroundColor: "#674172"}} onPress={() => { this.showAuthScreen(Constants.LOGIN)}} />
            <RoundedButton text="Sign Up" style={{backgroundColor: "#E67E22"}} onPress={() => { this.showAuthScreen(Constants.REGISTER)}} />
          </View>
          <View>
            <SocialButton type="facebook" onPress={ e => this.doSocialLogin('facebook')}>
              Login With Facebook
            </SocialButton>
            <SocialButton type="twitter" onPress={ e => this.doSocialLogin('twitter')}>
              Login With Twitter
            </SocialButton>
            <SocialButton type="google" onPress={ e => this.doSocialLogin('google')}>
              Login With Google
            </SocialButton>
          </View>
      </ScrollScreen>
    )
  }
}
