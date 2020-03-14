import axios from "axios";

const API_ROOT = "https://api.github.com/users/defunkt";

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  error => handleError(error)
);

const handleError = error => {
  let dataCode = "not_response";
  if (error.response) {
    const { code, message, data, status } = error.response;
    if (status === 401) {
    }
  }
  return Promise.reject(error.response || error.request || error.message);
};

const http = {
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers.Authorization = `bearer ${accessToken}`;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    return axios.delete(url, config);
  },
  postUploadFile(url, data = {}) {
    let formData = new FormData();
    data.photos.forEach(photo => {
      formData.append("photos", {
        uri: photo,
        type: "image/jpg",
        name: `${new Date().getTime()}.jpg`
      });
    });

    return this.post(url, formData);
  }
};

export default http;
