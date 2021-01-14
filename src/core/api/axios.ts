import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const inDevelopmentOrTesting =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

export const mockServer = inDevelopmentOrTesting ? new MockAdapter(axios) : {};
export default axios;
