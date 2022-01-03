import axios from "axios";

export const logIn = async (loginData) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  try {
    await axios.post(
      `https://peaceful-caverns-36182.herokuapp.com/https://api.jobboard.tedbree.com/v1/login`,
      loginData,
      config
    );
  } catch (error) {
    console.log(error);
  }
};
