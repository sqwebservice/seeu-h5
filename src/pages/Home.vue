<template>
  <div id="home">

      <van-nav-bar >
          <img src="../assets/logo.png" slot="left" />
      </van-nav-bar>
    <!--轮播图-->
    <Banner/>
    <!--咨询热点-->
    <div id="message" class="panel">
      <div>
        <div class="panel-title">资讯热点
          <div class="line"></div><a href="#">更多</a>
        </div>
      </div>
      <div class="panel-content">
        <ul>
          <li v-for="item in news">{{item.text}}</li>
        </ul>
      </div>
    </div>

    <!--导师团队-->
    <div id="teacher" class="panel">
      <div>
        <div class="panel-title">导师团队
          <div class="line"></div>
          <router-link to="/teacher" >更多</router-link>
        </div>
      </div>
        <div class="panel-content">
            <van-row gutter="20" v-for="item in teachers">
                <van-col span="6"  v-for="tItem in item.list" :key="tItem.teacher_id">
                    <img :src="tItem.path" >
                    <div class="name">{{tItem.teacher_name}}</div>
                </van-col>
                <div class="jobtitle divider"><span>{{item.text}}</span></div>

            </van-row>

        </div>
    </div>

    <!--全部课程-->
    <div id="course" class="panel cover-course">
      <div>
        <div class="panel-title">热门课程
          <div class="line"></div>
          <router-link to="/course">更多</router-link>
        </div>
      </div>
      <div class="panel-content">
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6 cover-course" v-for="item in hotClass" :key="item.class_id">
            <div class="image">
              <img class="img" :src="item.path"/>
              <img class="play" src="../../static/images/play-small-new_1daa417.png">
            </div>
            <div class="details left">
              <div class="title">{{item.class_name}}</div>
              <div class="teacher ellipsis">{{item.short_class_name}}</div>
              <div class="info">{{item.content}}</div>
            </div>
            <div class="right">
              <div class="numbers"><a class="mui-icon mui-icon-person"></a>{{0}}人看过</div>
              <div class="button">免费试看</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '../api';

  export default {
    name: "home",
    data() {
      return {
        titleName: '首页',
        news: [],
        teachers: [],
        hotClass:[]
      }
    },
    mounted(){
      this.getHotclass();
      this.getHotteacher();
      setTimeout(()=>{
        this.news = [
          {id:1, text:'Marking Analytics 专业，理工科和商科的完美结合Marking Analytics 专业，理工科和商科的完美结合'},
          {id:2, text:'想学BA？Business Analytics和Business Analytics分满了吗?'},
          {id:3, text:'面试专题|What`s your Weakness?'},
        ];
      }, 1000);
    },
    methods:{
      getHotclass(){
        API.getHotclass().then((re)=>{
          this.hotClass = re.data.data;
        });
      },
      getHotteacher(){
        API.getHotteacher().then(re=>{
          this.teachers = [ { text:'最牛教师阵容',list:re.data.data } ];
        });
      }
    }
  }
</script>

<style scoped>
  #home {
    color: #8f8f9f;
  }
  .van-nav-bar__left{
      height: 100% !important;
  }
  .van-nav-bar__left img {
      height: 30px;
      margin-top: 8px;
      display: flex;
      align-items: center;
      position: relative;
      left: 20px;
  }

  /*message资讯*/
  #message .panel-content li {
    position: relative;
    padding-left: 12px;
  }

  #message .panel-content li:before {
    content: '';
    width: 0;
    height: 0;
    border-width: 8px 0 6px 8px;
    border-style: solid;
    border-color: transparent transparent transparent #61b8be; /*透明 透明 透明 灰*/
    position: absolute;
    top: 5px;
    left: 0;
    bottom: 0;
  }

  /*teacher导师*/
  #teacher .list-item {
    padding: 5px;
    text-align: center;
    font-size: 14px;
  }

  #teacher .list-item img {
    width: 100%;
    min-height: 40px;
    display: block;
  }

  #teacher .jobtitle {
    width: 100%;
    position: relative;
    display: block;
    text-align: center;
    font-size: 11px;
    color: #333333 !important;
    padding: 0;
    margin: 0;
  }

  #teacher .panel-content > div {
    margin-top: 10px;
  }

  /*coursequan全部课程*/
  #course {
    margin-top: 10px;
  }
  #course .teacher{
    font-size: 9px;
  }
</style>
