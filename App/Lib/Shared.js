import ParseApp from './ParseApp';
import { ParseConfig, SocialConfig } from 'App/Config/AppConfig';
import Parse from 'parse/react-native';
import * as OAuthProviders from 'App/Lib/OAuthProviders';

const App = new ParseApp(ParseConfig, SocialConfig);

export function registerOAuthProvider() {
    for (key in OAuthProviders) {
        Parse.User._registerAuthenticationProvider(new OAuthProviders[key]());
    }
}

export default Shared = {
    App
}