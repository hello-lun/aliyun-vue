import Axios from '@/api/axios/index.js';

let obj = {};

obj.getArticalList = (data) => 
  Axios({
    url: '/api/article/list',
    method: 'get',
    data,
  });


export default obj;