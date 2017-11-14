import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from 'App/Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  centered: {
    alignItems: 'center'
  }
})
