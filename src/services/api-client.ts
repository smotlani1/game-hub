import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d9a2a3b34fc44bc8f7d6f375e127175",
  },
});
