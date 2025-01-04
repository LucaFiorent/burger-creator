import axios from "axios";

export const login = async ({ name, password }) => {
  try {
    //Accepts a json body with 2 fields: name, password
    //The only valid credentials the api accepts are
    //name: “xm”, password: “exercise” Returns a JWT token
    const url = `https://react-interview.xm.com/login`;
    const response = await axios.post(url, {
      name: name,
      password: password,
    });
    if (response.data.token) {
      return response.data.token;
    }
  } catch (err) {
    throw new Error("Token not found");
  }
};
