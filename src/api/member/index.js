import Axios from '@/api/axios/index.js';

let obj = {};

obj.getMemberList = () => 
  Axios({
    url: '/member/list',
    method: 'get',
  });


  export default obj;