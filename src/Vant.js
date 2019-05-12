/**
 * van 组件
 **/
import Vue from 'vue';
import { Button, Tab, Tabs, List,Cell, PullRefresh, Toast, Dialog } from 'vant';

Vue.use(Button);
Vue.use(Tab).use(Tabs);//可以横向滚动的tab标签
Vue.use(List);//列表加载更多控件
Vue.use(PullRefresh); //下拉刷新控件
Vue.use(Cell);
Vue.use(Toast);
Vue.use(Dialog);
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;

export default 'vant';

