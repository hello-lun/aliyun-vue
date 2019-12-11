import Axios from '@/api/axios/index.js';

let obj = {};

obj.upload = (data) => 
  Axios({
    url: '/api/uploads',
    method: 'post',
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    },
  })

export default obj;