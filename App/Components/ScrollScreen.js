import React, { Component } from 'react'
import { ScrollView, Text, Image, View, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images } from '../Themes'
// Styles
import styles from './Styles/ScrollScreenStyle'

export default class ScrollScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            {this.props.children}
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}
