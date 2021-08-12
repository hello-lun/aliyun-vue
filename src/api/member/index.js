/*
 * @Author: your name
 * @Date: 2021-08-12 23:12:42
 * @LastEditTime: 2021-08-12 23:13:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aliyun-vue/src/api/member/index.js
 */
import Axios from "@/api/axios/index.js";

let obj = {};
//回滚测试代码
let test = "test/commit-01";
test = "test/commit-02";
test = "test/commit-03";

obj.getMemberList = () =>
  Axios({
    url: "/api/member/list",
    method: "get"
  });

obj.getAllMember = () =>
  Axios({
    url: "/api/member/get-member",
    method: "get"
  });

export default obj;
