import ParseApp from './ParseApp';
import { ParseConfig, SocialConfig } from 'App/Config/AppConfig';
import Parse from 'parse/react-native';
import * as OAuthProviders from 'App/Lib/OAuthProviders';

const App = new ParseApp(ParseConfig, SocialConfig);

console.log(current().next());
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