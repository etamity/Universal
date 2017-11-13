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
           if (!resp || !resp.response || !resp.response.authorized) {
             return Parse.Promise.as(resp);
           }
           return this.manager
            .makeRequest('facebook', '/oauth/access_token', {
                params: {
                    redirect_uri: SocialConfig.facebook.callback_url,
                    client_id: SocialConfig.facebook.client_id,
                    client_secret: SocialConfig.facebook.client_secret,
                    fb_exchange_token: resp.response.credentials.accessToken,
                    grant_type: 'fb_exchange_token',
                }
            }).then(resp => {
                if (resp.status !== 200) {
                    console.log(resp);
                    return Parse.Promise.as(resp);
                }
                const credentials = resp.data;
                return this.manager.makeRequest('facebook', '/me?fields=id,name,email,gender').then(resp => {
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
            this.manager.makeRequest('facebook', '/me').then(resp => {
                if (resp.status !== 200 || authData.id !== resp.data.id) {
                    this.manager.deauthorize('facebook');
                }
            });
            return true;
        }
    }

    getAuthType() {
        return 'facebook';
    }

    deauthenticate() {
        Parse.User.logOut();
    }
};
