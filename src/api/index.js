import { doGet, doPost } from "./HttpUtils";

// const baseUrl = "https://seeu.hisums.cn"; //测试环境
const baseUrl = ""; //不设置，用当前域名
const rotpic = baseUrl+"/api/v1/rotpic";
const cjv = baseUrl+"/api/v1/cjv";

//轮播图
const getBanner = ()=>{
  return doGet(rotpic);
}

//合作企业
const getCjv = ()=>{
  return doGet(cjv);
}

const API = {
  getBanner, getCjv
}

export default API;
