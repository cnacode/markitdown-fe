import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const inDevelopmentOrTesting =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

export const mockServer = inDevelopmentOrTesting ? new MockAdapter(axios) : {};

const BASE_URL = inDevelopmentOrTesting
  ? "http://localhost:3030"
  : process.env.REACT_APP_MARK_IT_DOWN_BASE_URL;

export const NOTES = `${BASE_URL}/notes`;
export const AUTHENTICATIONS = `${BASE_URL}/authentications`;
export const USERS = `${BASE_URL}/users`;

export default axios;
