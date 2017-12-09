import ParseApp from './ParseApp';
import { ParseConfig, SocialConfig } from 'App/Config/AppConfig';
import Parse from 'parse/react-native';
import * as OAuthProviders from 'App/Lib/OAuthProviders';
import { registerForPushNotificationsAsync } from 'App/Lib/PushNotification';
const App = new ParseApp(ParseConfig, SocialConfig);
registerForPushNotificationsAsync();
export function registerOAuthProvider() {
    for (key in OAuthProviders) {
        const provider = new OAuthProviders[key]();
        Parse.User._registerAuthenticationProvider(provider);
    }
}

export default Shared = {
    App,
    currentUser: null
}