import OAuthManager   from 'react-native-oauth';

let manager = new OAuthManager('Universal');

// manager.addProvider({
//     'facebookv2': {
//         auth_version: "2.0",
//         authorize_url: 'https://graph.facebook.com/oauth/access_token',
//         access_token_url: 'https://graph.facebook.com/oauth/access_token',
//         api_url: 'https://graph.facebook.com',
//         callback_url: ({client_id}) => `fb${client_id}://authorize`,
//     }
// });

export default manager;