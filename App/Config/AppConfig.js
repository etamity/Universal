// Simple React Native specific changes
import '../I18n/I18n'
import Config from 'react-native-config'
import { Platform } from 'react-native';
export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true
}

console.log(Config);

export const ParseConfig = {
  serverURL: Config.PARSE_API_URL,
  appId: Config.PARSE_APP_ID,
  masterKey: Config.PARSE_MASTER_KEY,
  restKey: Config.PARSE_REST_API_KEY,
  javascriptKey: Config.PARSE_JAVASCRIPT_KEY,
  clientKey: Config.PARSE_CLIENT_KEY,
  apiKey: Config.PARSE_FILE_KEY,
  appName: Config.APP_NAME,
  description: 'Exchange your stuff or skill easily happen.'
}

export const SocialConfig = {
  twitter: {
    consumer_key: Config.TWITTER_APP_ID,
    consumer_secret: Config.TWITTER_APP_SECRET,
    callback_url: `${Config.APP_NAME.toLowerCase()}://oauth-response/twitter`
  },
  facebook: {
    client_id: Config.FACEBOOK_APP_ID,
    client_secret: Config.FACEBOOK_APP_SECRET,
    callback_url: `fb${Config.FACEBOOK_APP_ID}://authorize`
  },

  google: {
    callback_url: Config.GOOGLE_CALLBACK_URL,
    client_id: Config.GOOGLE_CLIENT_ID
  }
}
