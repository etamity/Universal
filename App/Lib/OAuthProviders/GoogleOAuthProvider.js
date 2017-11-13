import Parse from 'parse/react-native';
import parseDate from 'parse/lib/react-native/parseDate';
import { SocialConfig } from 'App/Config/AppConfig';

export class GoogleOAuthProvider {
    constructor(manager) {
        this.manager = manager;
    }
    authenticate(options) {
        return this.manager.authorize('google', { scopes: 'email+profile' })
            .then(resp => {
                console.log(resp);
                if (!resp.response.authorized) {
                    return Parse.Promise.as(resp);
                }
                const credentials = resp.response.credentials;
                return this.manager.makeRequest('google', 'https://www.googleapis.com/plus/v1/people/me')
                    .then(resp => {
                        if (resp.status !== 200) {
                            return Parse.Promise.as(resp);
                        }
                        const userData = resp.data;
                        let authData = {
                            id: userData.id,
                            access_token: credentials.accessToken
                        };
                        if (resp.data.emails.length > 0) {
                            authData.email = resp.data.emails[0].value;
                        }

                        if (options.success) {
                            options.success(this, authData);
                        }
                        return Parse.Promise.as(authData);
                    })
            });

    }

    restoreAuthentication(authData) {
        if (authData) {
            this.manager.makeRequest('google', 'https://www.googleapis.com/plus/v1/people/me')
            .then(resp => {
                if (resp.status !== 200 || authData.id !== resp.data.id) {
                    Parse.User.logOut();
                    this.manager.deauthorize('google');
                }
            });
        }
        return true;
    }
    getAuthType() {
        return 'google';
    }

    deauthenticate() {
        Parse.User.logOut();
    }
};
