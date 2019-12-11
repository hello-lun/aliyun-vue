import Axios from '@/api/axios/index.js';

let obj = {};

obj.getArticalList = (data) => 
  Axios({
    url: '/article/list',
    method: 'get',
    data,
  });


export default obj;