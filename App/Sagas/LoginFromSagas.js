/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LoginFromActions from '../Redux/LoginFromRedux'
import Parse from 'parse/react-native';
export function * LoginAction (action) {
  console.tron.log({'test': action});
  const {username, password} = action.payload;
  yield Parse.User.logIn(username, password, {
    success: function(user) {
      // Do stuff after successful login.
      console.tron.log(user);
      return put(LoginFromActions.requestSuccess(user));
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
      console.tron.log(error);
      return put(LoginFromActions.requestFailure());
    }
  });

}
