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
  const {username, password} = action.payload;
  console.log(username, password);
  yield Parse.User.logIn(username, password, {
    success: function(user) {
      // Do stuff after successful login.
      console.log(user);
      return put(LoginFromActions.requestSuccess());
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
      console.log(error);
      payload = {
        message: error
      }
      return put(LoginFromActions.requestFailure(payload));
    }
  });
}

export function RegisterAction (action) {
  console.tron.log({'RegisterAction': action});
  const { username, email, password } = action.payload;
  
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
  
  return user.signUp(null, {
    success: function(user) {
      // Do stuff after successful login.
      console.tron.log(user);
      return put(LoginFromActions.requestSuccess());
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      console.tron.log(error);
      payload = {
        message: error
      }
      return put(LoginFromActions.requestFailure(payload));
    }
  });
}
