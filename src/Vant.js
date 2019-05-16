/**
 * van 组件
 **/
import Vue from 'vue';
import { NavBar,Button, Tab, Tabs, List,Cell, PullRefresh, Toast, Dialog,Swipe, SwipeItem ,Field} from 'vant';

Vue.use(NavBar);
Vue.use(Button);
Vue.use(Tab).use(Tabs);//可以横向滚动的tab标签
Vue.use(List);//列表加载更多控件
Vue.use(PullRefresh); //下拉刷新控件
Vue.use(Cell);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Field);//输入框
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.use(Swipe).use(SwipeItem);

export default 'vant';


