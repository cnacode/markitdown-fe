import reducer from "./reducers"

export type AuthenticationState = {
    authenticated: boolean
    inProgress: boolean
}

export { reducer }
