import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ophim1.com/phim/anh-hung-xa-dieu-2003'
  });

  instance.interceptors.response.use(function (response) {

  return response.data;
}, function (error) {

  return Promise.reject(error);
});

  export default instance