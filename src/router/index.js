import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'; //主页
import Login from '../pages/Login'; //主页
import Home from '../pages/Home'; //首页内容
import MBTI from '../pages/MBTI'; //测试
import Score from '../pages/Score';  //成绩报告
import Me from '../pages/Me'; //个人中心
import Classify from '../pages/Classify'; //分类
import Message from '../pages/Message'; //消息
import Resume from '../pages/Resume'; //简历
import Info from '../pages/Info'; //填写信息
import AllCourse from '../pages/AllCourse'; //全部课程
import AllDatum from '../pages/AllDatum'; //全部课程
import TeacherTeam from '../pages/TeacherTeam'; //导师团队
import TeacherAppointment from '../pages/TeacherAppointment'; //预约
import Payment from '../pages/Payment'; //在线缴费


Vue.use(Router);

//测试tab页组件，用来二级路由跳转
const Test = {
    name: 'test',
    template: '<keep-alive><router-view/></keep-alive>'
}

const router = new Router({
    linkActiveClass: 'nav_active',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        { path: '/login', name: 'login', component: Login },
        {
            path: '/', name: 'index', component: Index, redirect: 'home',
            children: [
                {path: '/home', name: 'home', component: Home ,meta:{ noNeedLogin: true }},
                {
                    path: '/test', name: 'test', component: Test, redirect: '/test/mbti', children: [
                        {path: '/test/mbti', name: 'mbti', component: MBTI},
                        {path: '/test/mbti/score', name: 'score', component: Score}
                    ]
                },
                {path: '/me', name: 'me', component: Me},
                {path: '/classify', name: 'classify', component: Classify},
                {path: '/message', name: 'message', component: Message},
                {path: '/course', name: 'course', component: AllCourse},
                {path: '/datum', name: 'datum', component: AllDatum},
                {path: '/teacher', name: 'teacher', component: TeacherTeam},
                {path: '/teacherAppointment', name: 'teacherAppointment', component: TeacherAppointment},
                {path: '/payment', name: 'payment', component: Payment},
            ]
        },
        {path: '/me/resume', name: 'resume', component: Resume},
        {path: '/me/info', name: 'info', component: Info},
        {path: '*', redirect: "/"}  //全都没有的话，跳转到首页
    ]
})

export default router;
