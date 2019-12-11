import Axios from '@/api/axios/index.js';

let obj = {};

obj.getArticalList = (data) => 
  Axios({
    url: '/api/article/list',
    method: 'get',
    data,
  });

obj.getArticalById = (data) => 
  Axios({
    url: '/api/article/getArticalById',
    method: 'get',
    params: data,
  });

export default obj;