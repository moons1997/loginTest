import axios from "axios";

axios.interceptors.response.use(null, (ex) => {

  const expected =
    ex.response && ex.response.status >= 400 && ex.response.status < 500;
    
  if (!expected) {
    console.log("error ->" + ex);
  }

  return Promise.reject(ex);
});

export default {
  post: axios.post,
};
