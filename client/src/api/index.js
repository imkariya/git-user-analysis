const axios = require("axios");

const client = (url) => {
  const baseUrl = "http://127.0.0.1:3003/api/v1";
  return axios.get(`${baseUrl}/${url}`);
};

export default client;
