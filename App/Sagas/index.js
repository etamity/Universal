import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'

import { LoginFromTypes } from '../Redux/LoginFormRedux'
import { ApplicationTypes } from '../Redux/AppRedux'
import {
  LoginAction, RegisterAction, LogoutAction,
  FetchCurrentUserAction, LoginWithSocial, NavigationRedirect
} from './AuthSagas'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    takeLatest(LoginFromTypes.LOGIN_REQUEST, LoginAction),
    takeLatest(LoginFromTypes.REGISTER_REQUEST, RegisterAction),
    takeLatest(LoginFromTypes.LOGOUT_REQUEST, LogoutAction),
    takeLatest(ApplicationTypes.FETCH_CURRENT_USER_ACTION, FetchCurrentUserAction),
    takeLatest(LoginFromTypes.LOGIN_WITH_SOCIAL_REQUEST, LoginWithSocial),
    takeLatest(ApplicationTypes.SET_CURRENT_USER_ACTION, NavigationRedirect)
  ])
}
