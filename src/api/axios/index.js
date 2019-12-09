import axios from 'axios';

let jsonp = options => {
  let { url, data, jsonpCallback } = options;

  let isAbort = false;
  let jsonpInstance = null;
  jsonpInstance = new Promise((resolve, reject) => {
    let pathParm = '';
    if (data && Object.keys(data).length > 0) {
      for (let key in data) {
        pathParm = pathParm + '&' + key + '=' + data[key];
      }

      pathParm = pathParm + '&_=' + +new Date();
    }

    let JSONP = document.createElement('script');
    JSONP.type = 'text/javascript';
    JSONP.src = `${url}?callback=${jsonpCallback}${pathParm}`;
    document.getElementsByTagName('head')[0].appendChild(JSONP);

    window[jsonpCallback] = res => {
      isAbort ? reject(res) : resolve(res);
    };

    setTimeout(() => $(JSONP).remove(), 500);
  });

  // 兼容juqery的abort方法
  jsonpInstance.abort = function() {
    isAbort = true;
  };

  return jsonpInstance;
};

axios.defaults.withCredentials = true;
axios.defaults.timeout = 30000; // 超时时间，默认30000
axios.defaults.headers.post['Content-Type'] = 'application/json';

const CancelToken = axios.CancelToken;
const instance = axios.create();

function initAxios(oringinOption) {
  if (oringinOption.dataType && oringinOption.dataType === 'jsonp') {
    return jsonp(oringinOption);
  }

  let reqCancel = null;
  oringinOption.cancelToken = new CancelToken(c => (reqCancel = c));

  let axiosAjax = new Promise((resolve, reject) => {
    instance
      .request(oringinOption)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        // 主动取消请求时不需要进入错误提示环节
        reject(err.response || err.message);
      });
  });

  // 兼容jqury-ajax的abord方法
  axiosAjax.abort = function() {
    reqCancel('cancel request');
  };

  return axiosAjax;
}

export default initAxios;
