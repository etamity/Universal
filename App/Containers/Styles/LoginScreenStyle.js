import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  sectionForm: {
    ...ApplicationStyles.screen.section,
    backgroundColor: 'white',
    borderRadius: 5
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1
  }
})
