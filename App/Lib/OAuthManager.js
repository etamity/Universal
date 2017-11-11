import OAuthManager from 'react-native-oauth';
import { Parse, parseDate } from 'parse/react-native';
let manager = new OAuthManager('Universal');

var GoogleProvider = {
    authenticate(options) {
        let result = {
            id: 'id',
            access_token: 'access_token'
        };
        console.log(options);
        if (options.success) {
            options.success(this, result);
        }
    },

    restoreAuthentication(authData) {
        if (authData) {
            console.log('restoreAuthentication', authData)
            return true;
        }
    },

    getAuthType() {
        return 'google';
    },

    deauthenticate() {
        this.restoreAuthentication(null);
    }
};


var FacebookProvider = {
    authenticate(options) {
        if (!options.facebook) {
            options.error(this, 'Facebook AppID and AppSecret not found.');
        }
        console.log(options);
       return manager
            .makeRequest('facebook', '/oauth/access_token', {
                params: {
                    redirect_uri: options.facebook.callback_url,
                    client_id: options.facebook.client_id,
                    client_secret: options.facebook.client_secret,
                    fb_exchange_token: options.credentials.accessToken,
                    grant_type: 'fb_exchange_token',
                }
            }).then(resp => {
                console.log(resp);
                const credentials = resp.data;
                manager.makeRequest('facebook', '/me?fields=id,name,email,gender').then(resp => {
                    let authData = {
                        id: resp.data.id,
                        access_token: credentials.access_token,
                        expiration_date: new Date(credentials.expires_in * 1000 +
                            (new Date()).getTime()).toJSON()
                    };
                    if (options.success) {
                        options.success(this, authData);
                    }
                    return Parse.Promise.as(authData);
                });
            });

        //   FB.login((response) => {
        //     if (response.authResponse) {
        //       if (options.success) {
        //         options.success(this, {
        //           id: response.authResponse.userID,
        //           access_token: response.authResponse.accessToken,
        //           expiration_date: new Date(response.authResponse.expiresIn * 1000 +
        //               (new Date()).getTime()).toJSON()
        //         });
        //       }
        //     } else {
        //       if (options.error) {
        //         options.error(this, response);
        //       }
        //     }
        //   }, {
        //     scope: requestedPermissions
        //   });
    },

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
            var newOptions = {};
            if (initOptions) {
                for (var key in initOptions) {
                    newOptions[key] = initOptions[key];
                }
            }
            newOptions.authResponse = authResponse;

            // Suppress checks for login status from the browser.
            newOptions.status = false;
        }
        return true;
    },

    getAuthType() {
        return 'facebook';
    },

    deauthenticate() {
        this.restoreAuthentication(null);
    }
};


export function registerOAuthProvider() {
    Parse.User._registerAuthenticationProvider(GoogleProvider);
    Parse.User._registerAuthenticationProvider(FacebookProvider);
}
export default manager;