import axios from "axios";
import sha256 from "crypto-js/sha256";

const csrfToken = sha256("numailCsrfToken" + Date()).toString();

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: { "X-XSRF-TOKEN": csrfToken },
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});

export default axiosInstance;
