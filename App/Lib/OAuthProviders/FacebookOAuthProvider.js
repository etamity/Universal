import Parse from 'parse/react-native';
import parseDate from 'parse/lib/react-native/parseDate'; 
import { SocialConfig } from 'App/Config/AppConfig';

export class FacebookOAuthProvider {
    constructor(manager) {
        this.manager = manager;
    }
    authenticate(options) {
       return this.manager.authorize('facebook', { scopes: 'public_profile,email,user_friends' })
         .then(resp => {
           if (!resp.response.authorized) {
             return Parse.Promise.as(resp);
           }
           const fbConfig = SocialConfig.facebook;
           return this.manager
            .makeRequest('facebook', '/oauth/access_token', {
                params: {
                    redirect_uri: fbConfig.callback_url,
                    client_id: fbConfig.client_id,
                    client_secret: fbConfig.client_secret,
                    fb_exchange_token: resp.response.credentials.accessToken,
                    grant_type: 'fb_exchange_token',
                }
            }).then(resp => {
                const credentials = resp.data;
                this.manager.makeRequest('facebook', '/me?fields=id,name,email,gender').then(resp => {
                    let authData = {
                        id: resp.data.id,
                        access_token: credentials.access_token,
                        expiration_date: new Date(credentials.expires_in * 1000 +
                            (new Date()).getTime()).toJSON(),
                        email: resp.data.email
                    };
                    if (options.success) {
                        options.success(this, authData);
                    }
                    return Parse.Promise.as(authData);
                });
            });
        });
    }

    restoreAuthentication(authData) {
        if (authData) {
            var expiration = parseDate(authData.expiration_date);
            var expiresIn = expiration ?
                (expiration.getTime() - new Date().getTime()) / 1000 :
                0;

            var authResponse = {
                userID: authData.id,
                accessToken: authData.access_token,
                expiresIn: expiresIn
            };
            this.manager.authorize('facebook').then(resp => {
                if (resp.response.credentials.accessToken !== authData.access_token) {
                    Parse.User.logOut();
                    this.manager.deauthorize('facebook');
                }
            });
        }
        return true;
    }

    getAuthType() {
        return 'facebook';
    }

    deauthenticate() {
        this.restoreAuthentication(null);
    }
};
