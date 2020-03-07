import Axios from '@/api/axios/index.js';

let obj = {};

obj.getMemberList = () => 
  Axios({
    url: '/api/member/list',
    method: 'get',
  });

obj.getAllMember = () => 
  Axios({
    url: '/api/member/get-member',
    method: 'get',
  });

  export default obj;