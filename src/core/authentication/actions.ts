import { createAction } from "redux-actions"

export const loginStart = createAction("LOGIN_START")
export const loginSuccess = createAction("LOGIN_SUCCESS")
export const loginFail = createAction("loginFail")

export const logoutStart = createAction("LOGOUT_START")
export const logoutEnd = createAction("LOGOUT_END")
