import OAuthManager from 'react-native-oauth';
import Parse from 'parse/react-native';
import * as OAuthProviders from 'App/Lib/OAuthProviders';

let manager = new OAuthManager('Universal');

export function registerOAuthProvider() {
    for (key in OAuthProviders) {
        Parse.User._registerAuthenticationProvider(new OAuthProviders[key](manager));
    }
}
export default manager;