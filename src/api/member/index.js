import Axios from '@/api/axios/index.js';

let obj = {};

obj.getMemberList = () => 
  Axios({
    url: '/member/list',
    method: 'get',
  });

obj.getAllMember = () => 
  Axios({
    url: '/member/get-member',
    method: 'get',
  });

  export default obj;