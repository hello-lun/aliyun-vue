import Axios from '@/api/axios/index.js';

let obj = {};
//回滚测试代码
let test = 'test/commit-01';

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