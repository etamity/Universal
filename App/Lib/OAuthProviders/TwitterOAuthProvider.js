import Parse from 'parse/react-native';
import parseDate from 'parse/lib/react-native/parseDate';
import { SocialConfig } from 'App/Config/AppConfig';

export class TwitterOAuthProvider {
    constructor(manager) {
        this.manager = manager;
    }
    authenticate(options) {
        return this.manager.authorize('twitter', { scopes: 'email+profile' })
            .then(resp => {
                console.log(resp);
                if (!resp.response.authorized) {
                    return Parse.Promise.as(resp);
                }
                const credentials = resp.response.credentials;
                return this.manager.makeRequest('twitter', 'https://api.twitter.com/1.1/account/verify_credentials.json')
                    .then(resp => {
                        console.log(resp);
                        if (resp.status !== 200) {
                            return Parse.Promise.as(resp);
                        }
                        const userData = resp.data;
                        let authData = {
                            id: userData.id_str,
                            screen_name: userData.screen_name,
                            consumer_key: SocialConfig.twitter.consumer_key,
                            consumer_secret: SocialConfig.twitter.consumer_secret,
                            auth_token: credentials.access_token,
                            auth_token_secret: credentials.access_token_secret
                        };
                        if (options.success) {
                            options.success(this, authData);
                        }
                        return Parse.Promise.as(authData);
                    })
            });

    }

    restoreAuthentication(authData) {
        if (authData) {
            this.manager.makeRequest('twitter', 'https://api.twitter.com/1.1/account/verify_credentials.json')
            .then(resp => {
                if (resp.status !== 200 || authData.id !== resp.data.id_strgit) {
                    Parse.User.logOut();
                    this.manager.deauthorize('twitter');
                }
            });
            return true;
        }
    }

    getAuthType() {
        return 'twitter';
    }

    deauthenticate() {
        Parse.User.logOut();
    }
};
