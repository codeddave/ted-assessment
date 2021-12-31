import axios from "axios";

export const logIn = async (loginData) => {
  try {
    await axios.post(`https://api.jobboard.tedbree.com/v1/login`, loginData);
  } catch (error) {
    console.log(error);
  }
};
