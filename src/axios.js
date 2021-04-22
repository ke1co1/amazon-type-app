import axios from "axios";

const instance = axios.create({
  //the API (cloud function) URL
  // baseURL: "http://localhost:5001/clone-2ff04/us-central1/api",
  baseURL: "https://us-central1-clone-2ff04.cloudfunctions.net/api",
});

export default instance;
