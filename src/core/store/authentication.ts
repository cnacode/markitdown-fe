import { handleActions, createAction } from 'redux-actions'

export const loginStartAction = createAction('LOGIN_START')
export const loginSuccessAction = createAction('LOGIN_SUCCESS')
export const loginFailAction = createAction('loginFail')

export const logoutStartAction = createAction('LOGOUT_START')
export const logoutEndAction = createAction('LOGOUT_END')

const loginStart = loginStartAction.toString()
const loginSuccess = loginSuccessAction.toString()
const loginFail = loginFailAction.toString()
const logoutEnd = logoutEndAction.toString()
const logoutStart = logoutStartAction.toString()

const defaultState = {
  authenticated: true,
  inProgress: false,
}

const handlers = {
  [loginStart]: (state: any) => ({ ...state, inProgress: true }),
  [loginSuccess]: (state: any) => ({
    ...state,
    inProgress: false,
    authenticated: true,
  }),
  [loginFail]: (state: any) => ({ ...state, inProgress: false, authenticated: false }),
  [logoutStart]: (state: any) => ({ ...state, inProgress: true }),
  [logoutEnd]: (state: any) => (state: any) => ({
    ...state,
    inProgress: false,
    authenticated: false,
  }),
}

export type AuthenticationStoreType = {
  authenticated: boolean
  inProgress: boolean
}

const authentication = handleActions<AuthenticationStoreType, string>(handlers, defaultState)

export default authentication
