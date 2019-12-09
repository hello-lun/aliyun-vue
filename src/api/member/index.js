import Axios from '@/api/axios/index.js';

let getMemberList = () => 
  Axios({
    url: '/member/list',
    method: 'get',
  }).then(res => {
    this.goods = res.list;
  });

module.exports = {getMemberList};