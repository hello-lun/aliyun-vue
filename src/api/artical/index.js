import Axios from "@/api/axios/index.js";

let obj = {};

obj.getArticalList = data =>
  Axios({
    url: "/api/article/list4",
    method: "get",
    data
  });

obj.getArticalById = data =>
  Axios({
    url: "/api/article/getArticalById",
    method: "get",
    params: data
  });

obj.getArticalById12 = data =>
  Axios({
    url: "http://test-nraq.yy.com/resources",
    method: "get",
    params: data
  });

export default obj;
