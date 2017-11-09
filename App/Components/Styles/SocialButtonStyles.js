import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

const button = {
  height: 45,
  marginHorizontal: Metrics.section,
  marginVertical: Metrics.baseMargin,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 5,
  backgroundColor: '#3b5998'
};

export default StyleSheet.create({
  button: {
    ...button,
  },
  facebookButton: {
    ...button,
    backgroundColor: '#3b5998'
  },
  twitterButton: {
    ...button,
    backgroundColor: '#1DA1F2'
  },
  googleButton: {
    ...button,
    backgroundColor: '#d34836'
  },
  icon: {
    textAlign: 'center',
    fontSize: Fonts.size.input,
    marginHorizontal: Metrics.smallMargin,
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
