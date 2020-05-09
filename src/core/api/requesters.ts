import axios from "axios";
import cookie from "js-cookie";

export const postRequester = async (
  route: string,
  body: any,
  authenticated: boolean = true
) => {
  const token = cookie.get("tk");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(route, body, { headers });
    console.log("res", response);
  } catch (error) {
    console.log("err", error);
  }
};

export const getRequester = (
  route: string,
  query: string,
  authenticated: boolean = true
) => {};
