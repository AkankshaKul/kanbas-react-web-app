import axios from "axios";
// export const REACT_APP_BASE_API_URL = "http://localhost:4000";
// export const BASE_API = REACT_APP_BASE_API_URL;
export const USERS_API = "https://kanbas-node-server-app2-lmp7.onrender.com/api/users";
// const request = axios.create({
//     withCredentials: true,
//   });
  
export const signin = async (credentials) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    return response.data;
};

export const account = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${USERS_API}/account`);
    return response.data;
};

export const updateUser = async (user) => {
    axios.defaults.withCredentials = true;
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

export const findAllUsers = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`${USERS_API}`);
    return response.data;
};
export const createUser = async (user) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};
export const findUserById = async (id) => {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
};
export const deleteUser = async (user) => {
    axios.defaults.withCredentials = true;
    const response = await axios.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
  };
  export const signup = async (credentials) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(
      `${USERS_API}/signup`, credentials);
    return response.data;
  };
  export const signout = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
  };
  
  
  





