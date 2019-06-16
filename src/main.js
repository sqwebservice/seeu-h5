// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from './Vant';  //vant组件
import App from './App'
import router from './router'
import componnets from './components';
import store from './store';

Vue.config.productionTip = false;

//添加全局拦截器，判断是微信的话验证登录状态
router.beforeEach((to, from, next)=>{
    next();
    //判断登陆
    // console.log(to, 'to');
    // console.log(from, 'from');
    // let {name, meta} = to;
    // //如果不是登录界面，并且页面需要登录，并且用户为空，则进入判断
    // if('login' != name && !meta.noNeedLogin && !store.getters.getUser){
    //     console.warn('shouldValidate');
    //     next({name:'login'});
    // }else{
    //     next();
    // }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})

