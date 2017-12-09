import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Shared from 'App/Lib/Shared'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setCurrentUserAction: ['user'],
  fetchCurrentUserAction: null
})

export const ApplicationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentUser: null,
  settings: {},
  
})

/* ------------- Reducers ------------- */

// request the avatar for a user

export const setCurrentUserAction = (state, { user }) => {
  Shared.currentUser = user;
  return state.merge({ currentUser: user });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CURRENT_USER_ACTION]: setCurrentUserAction
})
