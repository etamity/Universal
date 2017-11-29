// Simple React Native specific changes
import '../I18n/I18n'
import { Platform } from 'react-native';
export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true
}

export const ParseConfig = {
  serverURL: 'https://parseapi.back4app.com/',
  appId: 'BfykOdTLxbKo1MB79YqvTT2XFSbhzPqOUYBTClCr',
  masterKey: 'b7gTAOGHAmEQc2FoAOhJeo3zf0rTIg1bRb5dUqfO',
  restKey: 'ZcbUIOvxVgY2L3X3S4ITgmyGT2rCGFzdyYoeE0n0',
  javascriptKey: 'YuBxowNrPNJzi8QcFHlxQPJNTVGifjaJtZg4tQ0s',
  clientKey:'bJZveYDz5v03gKLrHWd100jScoakq4jwI22wHExN',
  apiKey: 'cbc35f9f-16f7-47b0-957d-4b91cce2aa63',
  appName: 'SwapAnt',
  description: 'Exchange your stuff or skill easily happen.'
}

export const SocialConfig = {
  twitter: {
    consumer_key: 'Py239XmBRxwAqqds3OF5IBzTi',
    consumer_secret: 'XC82wCUZgkb3aEPiEZB6Hzeo8DCF0MnE6w5yJ5KlNtF5j6JtJd',
    callback_url: `swapant://oauth-response/twitter`
  },
  facebook: {
    client_id: '1706321676305607',
    client_secret: '5b7b8ce2fe682bb12b68c29ac75a5f0a',
    callback_url: `fb1706321676305607://authorize`
  },

  google: {
    callback_url: 'com.googleusercontent.apps.547912089250-6mr9u4e5ne8dofaip1fnrp3ffetpc20v:/google',
    client_id: '547912089250-6mr9u4e5ne8dofaip1fnrp3ffetpc20v.apps.googleusercontent.com'
  }
}
