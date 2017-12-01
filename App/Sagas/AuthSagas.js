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
import AppRedux, { setCurrentUserAction } from '../Redux/AppRedux'
import LoginFormRedux from '../Redux/LoginFormRedux'
import Parse from 'parse/react-native';
import Shared from 'App/Lib/Shared';
import { NavigationActions } from 'react-navigation'
import { ModalIndicator } from 'teaset'

export function* LoginAction(action) {
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
    //yield put(LoginFormRedux.requestFailure(payload));
    yield put(AppRedux.setCurrentUserAction(null));
  }

}

export function* RegisterAction(action) {
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
    //yield put(LoginFormRedux.requestFailure(payload));
    yield put(AppRedux.setCurrentUserAction(null));
  }
}

export function* LogoutAction() {
  try {
    const result = yield call(Parse.User.logOut);
    yield put(AppRedux.setCurrentUserAction(null));

  } catch (error) {
    payload = {
      message: error
    }
    console.log('LogoutAction', error);
    yield put(AppRedux.setCurrentUserAction(null));
  }

}
export function* FetchCurrentUserAction() {

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
    console.log(error);
    //yield put(LoginFormRedux.requestFailure(payload));
    yield put(AppRedux.setCurrentUserAction(null));
  }
}


export function* LoginWithSocial(action) {
  const { type } = action.payload;
  try {
    const user = yield call(Shared.App.loginWithSocial, type);

    if (user) {
      yield put(AppRedux.setCurrentUserAction(user));
    } else {
      yield put(AppRedux.setCurrentUserAction(null));
    }
  } catch (error) {

    console.log(error);
    payload = {
      message: error
    }
    //yield put(LoginFormRedux.requestFailure(payload));
    yield put(AppRedux.setCurrentUserAction(null));
  }
}

export function* NavigationRedirect(action) {
  ModalIndicator.hide();
  const { user } = action;
  const current = yield Parse.User.current();
  let routeName = 'MainScreen';
  if (user && user.id === current.id) {
    routeName = 'MainScreen';
  } else {
    routeName = 'LaunchScreen';
  }
  const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
  });
  yield put(resetAction);
}