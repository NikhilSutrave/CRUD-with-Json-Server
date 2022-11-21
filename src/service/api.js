import axios from "axios";

// Api
const Api_URL = "http://localhost:3002/users";

//post
export const adduser = async (data) => {
  try {
    return await axios.post(Api_URL, data);
  } catch (error) {
    console.log(`Error while calling an addUser Api ${error.message}`);
  }
};

//get
export const getUser = async () => {
  try {
    return await axios.get(Api_URL);
  } catch (error) {
    console.log(`Error while getting an User Api ${error.message}`);
  }
};

//get single user
export const getSingleuser = async (data) => {
  try {
    return await axios.get(`${Api_URL}/${data}`);
  } catch (error) {
    console.log(`Error while getting an single user Api ${error.message}`);
  }
};

//put
export const editUser = async (data, id) => {
  try {
    return await axios.put(`${Api_URL}/${id}`, data);
  } catch (error) {
    console.log(`Error while calling an Edit Api ${error.message}`);
  }
};

//delete
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${Api_URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling an Delete Api ${error.message}`);
  }
};
