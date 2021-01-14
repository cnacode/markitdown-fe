export { postRequester, getRequester } from 'core/api/requesters'

const inDevelopmentOrTesting =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

const BASE_URL = inDevelopmentOrTesting
  ? 'http://localhost:3030'
  : process.env.REACT_APP_MARK_IT_DOWN_BASE_URL

export const NOTES = {
  CREATE: `${BASE_URL}/notes`,
}
export const AUTHENTICATIONS = `${BASE_URL}/authentications`
export const USERS = `${BASE_URL}/users`
