import axios from "axios";

const URL = "";

export const apiRequest = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error occurred while requesting API", error);
  }
};

export const loginAuthentication = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error occurred while requesting login API", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response= await axios.post(`${URL}/payment`, data);
    return response;
  } catch (error) {
    console.log("Error occurred while requesting paytm API", error);
  }
};