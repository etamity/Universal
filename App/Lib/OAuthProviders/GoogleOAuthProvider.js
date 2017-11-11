import Parse from 'parse/react-native';
import parseDate from 'parse/lib/react-native/parseDate'; 
import { SocialConfig } from 'App/Config/AppConfig';



export class GoogleOAuthProvider {
    constructor(manager) {
        this.manager = manager;
    }
    authenticate(options) {

    }

    restoreAuthentication(authData) {
        if (authData) {
            console.log('restoreAuthentication', authData)
            return true;
        }
    }
    getAuthType() {
        return 'google';
    }

    deauthenticate() {
        this.restoreAuthentication(null);
    }
};
