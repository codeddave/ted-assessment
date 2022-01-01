import axios from "axios";

export const getJobs = async () => {
  try {
    const response = await axios.get(
      `https://peaceful-caverns-36182.herokuapp.com/https://api.jobboard.tedbree.com/v1/jobs`
    );

    return response.data.data;
  } catch (error) {}
};
