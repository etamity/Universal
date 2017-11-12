import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import SocialButton from 'App/Components/SocialButton'
import RoundedButton from 'App/Components/RoundedButton'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images } from '../Themes'
import ScrollScreen from 'App/Containers/ScrollScreen'
// Styles
import styles from './Styles/LaunchScreenStyles'
import { Fonts, Colors, Metrics } from 'App/Themes/'

import Shared from 'App/Lib/Shared'
import Parse          from 'parse/react-native';
export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.doSocialLogin = this.doSocialLogin.bind(this);
  }
  doSocialLogin(type) {
    Shared.App.loginWithSocial(type);
  }

  render () {

    return (
      <ScrollScreen>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <DevscreensButton />
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
