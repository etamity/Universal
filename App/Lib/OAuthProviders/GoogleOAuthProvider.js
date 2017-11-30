import Parse from 'parse/react-native';
import parseDate from 'parse/lib/react-native/parseDate';
import { SocialConfig } from 'App/Config/AppConfig';
import Expo from 'expo';
export class GoogleOAuthProvider {
    authenticate(options) {

        return new Promise((resolve, reject) => {
            let responseTokens = {};
            Expo.Google.logInAsync({
                scopes: ['profile', 'email'],
                androidClientId: SocialConfig.google.android_client_id,
                webClientId: SocialConfig.google.ios_client_id,
                iosClientId: SocialConfig.google.ios_client_id,
                iosStandaloneAppClientId: SocialConfig.google.ios_client_id,
                behavior: 'web'
            })
            .then((response) => {
                    console.log(response);
                    switch (response.type) {
                        case 'success':
                            const authData = Object.assign({}, response.user, {
                                access_token: response.accessToken,
                                idToken: response.idToken,
                                serverAuthCode: response.serverAuthCode,
                                refreshToken: response.refreshToken
                            });

                            if (response.user.emails.length > 0) {
                                authData.email = response.user.emails[0].value;
                            }

                            resolve(resolve({
                                type: 'success',
                                credentials
                            }));
                        case 'cancel':
                            reject({
                                type: 'error',
                                msg: 'login canceled'
                            })
                            break;
                        default:
                            reject({
                                type: 'error',
                                msg: 'Google login failed'
                            })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    reject({
                        type: 'error',
                        msg: 'login failed'
                    })
                });
        });

    }

    restoreAuthentication(authData) {
        // if (authData) {
        //     this.manager.makeRequest('google', 'https://www.googleapis.com/plus/v1/people/me')
        //     .then(resp => {
        //         if (resp.status !== 200 || authData.id !== resp.data.id) {
        //             Parse.User.logOut();
        //             this.manager.deauthorize('google');
        //         }
        //     });
        // }
        return true;
    }
    getAuthType() {
        return 'google';
    }

    deauthenticate() {
        Parse.User.logOut();
    }
};
