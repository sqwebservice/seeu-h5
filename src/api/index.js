import { doGet, doPost } from "./HttpUtils";

// const baseUrl = "https://seeu.hisums.cn"; //测试环境
const baseUrl = ""; //不设置，用当前域名
const rotpic = baseUrl+"/api/v1/rotpic";
const cjv = baseUrl+"/api/v1/cjv";
const courseClz = baseUrl+" /api/v1/courses";  //视频分类
const courseUrl = baseUrl+" /api/v1/course/list/";  //视频列表
const datumBooks = baseUrl+"/api/v1/books";  //资料分类
const datumList = baseUrl+"/api/v1/books/chapters";  //资料列表
const teacher = baseUrl+" /api/v1/teacher/sort";  //导师分类
const teacherList = baseUrl+"/api/v1/teacher";  //导师列表
const hotclassUrl = baseUrl+" /api/v1/hotclass";  //首页热门课程
const hotteacherUrl = baseUrl+" /api/v1/hotteacher";  //最牛教师阵容

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

//资料分类
const getDatumTab = ()=>{
  let arg = {
    page_size: 100,
    page: 1
  };
  return doGet(datumBooks, arg);
}
  //资料列表
  const getDatumList = (params)=>{
    return doGet(datumList, params);
  }

//导师分类
const getTeacherTab = ()=>{
  let arg = {
    page_size: 100,
    page: 1
  };
  return doGet(teacher, arg);
}
//导师列表
const getTeacherList = (params)=>{
  return doGet(teacherList, params);
}
/**
 * 首页热门课程
 */
const getHotclass = ()=>{
  return doGet(hotclassUrl);
}
/**
 * 首页最牛教师
 */
const getHotteacher = ()=>{
  return doGet(hotteacherUrl);
}

const API = {
  getBanner, getCjv, courseClass, getCourse, getHotclass, getHotteacher
  ,getDatumTab,getDatumList,getTeacherTab,getTeacherList
}

export default API;
