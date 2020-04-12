import { handleActions } from "redux-actions"
import { AuthenticationState } from "./index"
import {
    loginStart as loginStartAction,
    loginSuccess as loginSuccessAction,
    loginFail as loginFailAction,
    logoutEnd as logoutEndAction,
    logoutStart as logoutStartAction,
} from "./actions"

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

const reducer = handleActions<AuthenticationState, string>(handlers, defaultState)

export default reducer
