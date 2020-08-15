const axios = require("axios");
const { target_url } = require("./constant");

const axiosInstance = axios.create({
  baseURL: target_url,
});

module.exports = axiosInstance;
