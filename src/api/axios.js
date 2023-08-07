import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3c445cadc2cfe27a003e07266d753f17",
    language: "ko-KR",
  },
});

export default instance;
