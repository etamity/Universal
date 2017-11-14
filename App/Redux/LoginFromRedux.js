import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  logoutRequest: null,
  registerRequest: ['email', 'username', 'password'],
  requestSuccess: ['user'],
  requestFailure: null
})

export const LoginFromTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  isValid: false,
  disabled: false,
  user: null,
  fields: Immutable({
    username: '',
    usernameErrorMsg: null,
    email: '',
    emailErrorMsg: null,
    password: '',
    passwordErrorMsg: null,
    passwordAgain: '',
    passwordAgainErrorMsg: null,
    showPassword: false
  })
})

/* ------------- Reducers ------------- */

// request the data from an api
export const loginRequest = (state, {username, password}) => {
  return state.merge({ fetching: true, username, password});
}


export const registerRequest = (state, { username, email }) =>
  state.merge({ fetching: true, username, email })

// successful api lookup
export const requestSuccess = (state, action) => {
  const { user } = action
  return state.merge({ fetching: false, error: null, user })
}

// Something went wrong somewhere.
export const requestFailure = state =>
  state.merge({ fetching: false, error: true, user: null })

export const logoutRequest = state =>
  state.merge({ fetching: false, error: false, user: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REQUEST_SUCCESS]: requestSuccess,
  [Types.REQUEST_FAILURE]: requestFailure,
  [Types.LOGOUT_REQUEST]: logoutRequest
})
