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
import AppRedux from '../Redux/AppRedux'
import LoginFormRedux from '../Redux/LoginFormRedux'
import Parse from 'parse/react-native';

export function * LoginAction(action) {
  const { username, password } = action.payload;
  try {
    const user = yield call(Parse.User.logIn, username, password);
    if (user) {
      yield put(AppRedux.setCurrentUserAction(user));
    } else {
      yield put(AppRedux.setCurrentUserAction(null));
    }
  } catch (error) {
    payload = {
      message: error
    }
    yield put(LoginFormRedux.requestFailure(payload));
    yield put(AppRedux.setCurrentUserAction(null));
  }

}

export function * RegisterAction(action) {
  const { username, email, password } = action.payload;

  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  try {
    const user = yield call(user.signUp, null);
    if (user) {
      yield put(AppRedux.setCurrentUserAction(user));
    } else {
      yield put(AppRedux.setCurrentUserAction(null));
    }
  } catch (error) {
    payload = {
      message: error
    }
    yield put(LoginFormRedux.requestFailure(payload));
    yield put(AppRedux.setCurrentUserAction(null));
  }
}

export function * LogoutAction(){
  try {
    const result = yield call(Parse.User.logOut);
    yield put(AppRedux.setCurrentUserAction(null));
  } catch (error) {
    console.log(error);
  }

}
export function * FetchCurrentUserAction(){

  try {
    const user = yield call(Parse.User.currentAsync);
    if (user) {
      yield put(AppRedux.setCurrentUserAction(user));
    } else {
      yield put(AppRedux.setCurrentUserAction(null));
    }
  } catch (error) {
    payload = {
      message: error
    }
    yield put(LoginFormRedux.requestFailure(payload));
    yield put(AppRedux.setCurrentUserAction(null));
  }
}