import Axios from '@/api/axios/index.js';

let obj = {};
//master回滚
let master = 'master/commit-03';

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