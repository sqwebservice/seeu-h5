import { doGet, doPost } from "./HttpUtils";

// const baseUrl = "https://seeu.hisums.cn"; //测试环境
const baseUrl = ""; //不设置，用当前域名
const rotpic = baseUrl+"/api/v1/rotpic";
const cjv = baseUrl+"/api/v1/cjv";
const courseClz = baseUrl+" /api/v1/courses";  //视频分类
const courseUrl = baseUrl+" /api/v1/course/list/";  //视频列表

//轮播图
const getBanner = ()=>{
  return doGet(rotpic);
}

//合作企业
const getCjv = ()=>{
  return doGet(cjv);
}
//视频分类
const courseClass = ()=>{
  let arg = {
    page_size: 100,
    page: 1
  };
  return doGet(courseClz, arg);
}
/**
 * 视频列表
 */
const getCourse = (cid, params)=>{
  return doGet(courseUrl+cid, params);
}


const API = {
  getBanner, getCjv, courseClass, getCourse
}

export default API;
