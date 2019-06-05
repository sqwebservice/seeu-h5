import Vuex from 'vuex';
import Vue from 'vue';
import bean from './SaveBean';
Vue.use(Vuex);  //使用vuex

//创建store实例
const store = new Vuex.Store({
    state: {
        user: null,
    },
    getters: {
        getUser:(state)=>{
            if(state.user == null){
                state.user = bean.user.get();
            }
            return state.user;
        },
    }
});

export default store;

