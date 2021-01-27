import Axios from "axios";

var Instance = Axios.create({
  baseURL: "http://back.dev.liateam.ir/api/rest/v1/",
});

export default Instance;
