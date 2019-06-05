/**
 * 保存数据类
 **/
const SaveBean = function(key){
  this.key=key;
  this.obj;
  this.save = function(payload){
    this.obj=payload;
    localStorage.setItem(this.key, JSON.stringify(payload));
  }
  this.clear=function(){
    this.obj = null;
    localStorage.setItem(this.key, null);
  }
  this.get = function(){
    if(this.obj){
      return this.obj;
    }
    let obj = null;
    let str = localStorage.getItem(this.key);
    if(str){
      obj = JSON.parse(str);
    }
    return obj;
  }
}

const user = new SaveBean("su_user");
const token = new SaveBean("su_token");

export default {
  user, token
}
