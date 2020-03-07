import Axios from '@/api/axios/index.js';

let obj = {};

//cherry-pick测试代码
let test = 'commit-01';
test = 'commit-02';

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