import axios from "axios";

const http = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/fa267b05211d4e6c1206ab847e3b72fe/project",
  timeout: 10000,
  headers: {},
});

export default http;
