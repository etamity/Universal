import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import SocialButton from 'App/Components/SocialButton.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images } from '../Themes'
import ScrollScreen from 'App/Containers/ScrollScreen'
// Styles
import styles from './Styles/LaunchScreenStyles'
import { Fonts, Colors, Metrics } from 'App/Themes/'

import Shared from 'App/Lib/Shared'

export default class LaunchScreen extends Component {
  componentDidMount() {
    Shared.App.getServerInfo().then(app => {
      console.log(app);
    });

  }
  render () {

    return (
      <ScrollScreen>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>

            </Text>
          </View>
          <View>
            <SocialButton type="facebook">
              Login With Facebook
            </SocialButton>
            <SocialButton type="twitter">
              Login With Twitter
            </SocialButton>
          </View>
      </ScrollScreen>
    )
  }
}
