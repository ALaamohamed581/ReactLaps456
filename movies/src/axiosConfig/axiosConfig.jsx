import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "373deafea50851fa286eb8b2dbbbf5b9",
  },
  url: "/popular",
});
export default axiosConfig;
