/**
 * van 组件
 **/
import Vue from 'vue';
import { NavBar,Button, Tab, Tabs, List,Cell, CellGroup , PullRefresh, Toast, Dialog,Swipe, SwipeItem ,Field,Icon,Uploader,Popup,Picker,RadioGroup, Radio,DatetimePicker} from 'vant';

Vue.use(NavBar);
Vue.use(Button);
Vue.use(Tab).use(Tabs);//可以横向滚动的tab标签
Vue.use(List);//列表加载更多控件
Vue.use(PullRefresh); //下拉刷新控件
Vue.use(Cell).use(CellGroup);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Field);//输入框
Vue.use(Icon);//图标
Vue.use(Uploader);//s上传控件
Vue.use(Popup);//弹出层
Vue.use(Picker);//弹出层
Vue.use(RadioGroup);
Vue.use(Radio);//单选
Vue.use(DatetimePicker);//时间选择

Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.use(Swipe).use(SwipeItem);

export default 'vant';


