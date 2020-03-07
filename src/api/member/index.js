import Axios from '@/api/axios/index.js';

let obj = {};

let master = 'commit-1';
master = 'commit-0002';

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