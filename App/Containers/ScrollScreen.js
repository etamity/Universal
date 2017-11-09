import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images } from '../Themes'
import RoundedButton from 'App/Components/RoundedButton'
// Styles
import styles from './Styles/ScrollScreenStyles'

export default class BaseScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
         {this.props.children}
        </ScrollView>
      </View>
    )
  }
}
