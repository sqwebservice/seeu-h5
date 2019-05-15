import axios from 'axios';

/**
 * httpGet
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
const doGet = (url, params)=>{

  let promise = new Promise((resolve, reject)=>{
    axios.get(url, {params:params}).then(re =>{
      console.log("httpUtils",re);
      let { status, statusText, data } = re;
      let res = { status, statusText, data };
      //http返回状态
      if(status == 200){
        resolve(res);
      }else{
        reject(res);
      }
    }).catch(e =>{
      reject(e);
    })
  });

  return promise;
}

/**
 * httpPost
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
const doPost = (url, params)=>{

  let promise = new Promise((resolve, reject)=>{
    axios.post(url, params).then(re=>{
      console.log(re);
      let { status, statusText, data } = re;
      let res = { status, statusText, data };
      //http返回状态
      if(status == 200){
        resolve(res);
      }else{
        reject(res);
      }
    }).catch(e=>{
      reject(e);
    })
  });

  return promise;
}

export {
  doGet,
  doPost
}
