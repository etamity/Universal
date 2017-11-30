import Parse from 'parse/react-native';
import parseDate from 'parse/lib/react-native/parseDate';
import { SocialConfig } from 'App/Config/AppConfig';
import Expo from 'expo';
export class FacebookOAuthProvider {
    authenticate(options) {
        return new Promise((resolve, reject)=> {
            let access_token = '';
            let expires_in = null;
            Expo.Facebook.logInWithReadPermissionsAsync(SocialConfig.facebook.client_id, {
                permissions: ['public_profile', 'email', 'user_birthday', 'user_friends'],
                behavior: 'browser',
            }).then((response) => {
                    switch (response.type) {
                        case 'success':
                            // token is a string giving the access token to use 
                            // with Facebook HTTP API requests.
                            expires_in = response.expires;
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
                    access_token = token;
                    return fetch(`https://graph.facebook.com/me?fields=id,name,email,birthday,gender&access_token=${access_token}`);
                })
                .then((response) => {
                    return response.json();
                })
                .then((facebookJSONResponse) => {
                    if (facebookJSONResponse.hasOwnProperty('error')) {
                        reject({
                            type: 'error',
                        });
                    }
                    console.log(facebookJSONResponse);
                    let authData = {
                        id: facebookJSONResponse.id,
                        access_token: access_token,
                        expiration_date: new Date(expires_in * 1000 +
                            (new Date()).getTime()).toJSON(),
                        email: facebookJSONResponse.email
                    };
        
                    if (options.success) {
                        options.success(this, authData);
                    }

                    resolve(authData);

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
        // if (authData) {
        //     fetch(`https://graph.facebook.com/me?fields=id,name,email,birthday,gender&access_token=${authData.access_token}`).then((response) => {
        //         return response.json();
        //     }).then(resp => {
        //         if (resp.status !== 200 || authData.id !== resp.data.id) {
        //             Parse.User.logOut();
        //         }
        //     });

        // }
        return true;
    }

    getAuthType() {
        return 'facebook';
    }

    deauthenticate() {
        Parse.User.logOut();
    }
};
