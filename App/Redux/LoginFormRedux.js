import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  logoutRequest: null,
  registerRequest: ['payload'],
})

export const LoginFromTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  isValid: false,
  disabled: false,
  message: null,
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


export const registerRequest = (state, { username, password, email }) =>
  state.merge({ fetching: true, username, password, email })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.REGISTER_REQUEST]: registerRequest
})
