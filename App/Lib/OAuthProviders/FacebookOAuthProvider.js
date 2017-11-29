import Parse from 'parse/react-native';
import parseDate from 'parse/lib/react-native/parseDate';
import { SocialConfig } from 'App/Config/AppConfig';
import Expo from 'expo';
export class FacebookOAuthProvider {
    authenticate(options) {
        return new Promise(function (resolve, reject) {
            let accessToken = '';
            Expo.Facebook.logInWithReadPermissionsAsync(SocialConfig.facebook.client_id, {
                permissions: ['public_profile', 'email', 'user_birthday', 'user_friends'],
                behavior: 'native',
            })
                .then((response) => {
                    console.log('response',response);
                    switch (response.type) {
                        case 'success':
                            // token is a string giving the access token to use 
                            // with Facebook HTTP API requests.
                            return response.token;
                        case 'cancel':
                            reject({
                                type: 'error',
                                msg: 'login canceled'
                            })
                            break;
                        default:
                            reject({
                                type: 'error',
                                msg: 'login failed'
                            })
                    }
                })
                .then((token) => {
                    accessToken = token;
                    return fetch(`https://graph.facebook.com/me?fields=id,name,email,birthday,gender&access_token=${accessToken}`);
                })
                .then((response) => {
                    return response.json();
                })
                .then((facebookJSONResponse) => {
                    console.log('facebookJSONResponse', facebookJSONResponse);
                    if (facebookJSONResponse.hasOwnProperty('error')) {
                        reject({
                            type: 'error',
                        });
                    }
                    let authData = {
                        id: facebookJSONResponse.data.id,
                        access_token: access_token,
                        expiration_date: new Date(facebookJSONResponse.expires_in * 1000 +
                            (new Date()).getTime()).toJSON(),
                        email: facebookJSONResponse.data.email
                    };
                    if (options.success) {
                        options.success(this, authData);
                    }
                    return Parse.Promise.as(authData);

                })
                .catch(function (error) {
                    console.log(error);
                    reject({
                        type: 'error',
                        msg: 'Facebook login failed'
                    })
                });
        });

    }

    restoreAuthentication(authData) {
        if (authData) {
            fetch(`https://graph.facebook.com/me?fields=id,name,email,birthday,gender&access_token=${authData.access_token}`).then(resp => {
                if (resp.status !== 200 || authData.id !== resp.data.id) {

                }
            });

        }
        return true;
    }

    getAuthType() {
        return 'facebook';
    }

    deauthenticate() {
        Parse.User.logOut();
    }
};
