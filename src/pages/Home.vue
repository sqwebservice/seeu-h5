<template>
  <div id="home">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;height: 55px;">
      <!--<h1 class="mui-title" style="color: #fff;text-align: left;">{{titleName}}</h1>-->
      <div class="mui-pull-left"><img src="../assets/logo.png"></div>
    </header>
    <!--轮播图-->
    <Banner/>
    <!--咨询热点-->
    <div id="message" class="panel">
      <div>
        <div class="panel-title">咨询热点
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
        <div v-for="item in teachers">
          <div class="mui-row">
            <div class="mui-col-sm-3 mui-col-xs-6 list-item" v-for="tItem in item.list">
              <img :src="tItem.img" >
              <div class="name">{{tItem.name}}</div>
            </div>
          </div>
          <div class="jobtitle divider"><span>{{item.text}}</span></div>
        </div>
      </div>
    </div>

    <!--全部课程-->
    <div id="course" class="panel cover-course">
      <div>
        <div class="panel-title">全部课程
          <div class="line"></div>
          <router-link to="/course">更多</router-link>
        </div>
      </div>
      <div class="panel-content">
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-12 cover-course" v-for="item in allClass">
            <div class="image">
              <img class="img" :src="item.img"/>
              <img class="play" src="../../static/images/play-small-new_1daa417.png">
            </div>
            <div class="details left">
              <div class="title">{{item.title}}</div>
              <div class="teacher ellipsis">{{item.teacher}}</div>
              <div class="info">{{item.info}}</div>
            </div>
            <div class="right">
              <div class="numbers"><a class="mui-icon mui-icon-person"></a>{{item.viewnum}}人看过</div>
              <div class="button">免费试看</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        titleName: '首页',
        news: [],
        teachers: [],
        allClass:[]
      }
    },
    mounted(){
      setTimeout(()=>{
        this.teachers = [
          {text:'职业规划师',list:[
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
            ]
          },
          {text:'资讯行业导师',list:[
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
              {name:'sophia',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'},
            ]
          }
        ];
        this.news = [
          {id:1, text:'Marking Analytics 专业，理工科和商科的完美结合'},
          {id:2, text:'想学BA？Business Analytics和Business Analytics分满了吗?'},
          {id:3, text:'面试专题|What`s your Weakness?'},
        ];
        this.allClass = [
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556733432157&di=1b49ca8afb8c3bab5b0818bec3eaa949&imgtype=0&src=http%3A%2F%2Fs12.sinaimg.cn%2Fmw690%2F001okAbYzy7swVjjIrVeb%26690',
            title:'推荐算法应用基础讲解',
            teacher:'导师：XX公司资深高级数据科学家Haven',
            info:'以下是这些视频的一些详细介绍，可能内容会比较长，但是我们可以做',
            viewnum: 2000
          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556733432157&di=1b49ca8afb8c3bab5b0818bec3eaa949&imgtype=0&src=http%3A%2F%2Fs12.sinaimg.cn%2Fmw690%2F001okAbYzy7swVjjIrVeb%26690',
            title:'推荐算法应用基础讲解',
            teacher:'导师：XX公司资深高级数据科学家Haven',
            info:'以下是这些视频的一些详细介绍，可能内容会比较长，但是我们可以做',
            viewnum: 2002
          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556733432157&di=1b49ca8afb8c3bab5b0818bec3eaa949&imgtype=0&src=http%3A%2F%2Fs12.sinaimg.cn%2Fmw690%2F001okAbYzy7swVjjIrVeb%26690',
            title:'推荐算法应用基础讲解',
            teacher:'导师：XX公司资深高级数据科学家Haven',
            info:'以下是这些视频的一些详细介绍，可能内容会比较长，但是我们可以做',
            viewnum: 2003
          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556733432157&di=1b49ca8afb8c3bab5b0818bec3eaa949&imgtype=0&src=http%3A%2F%2Fs12.sinaimg.cn%2Fmw690%2F001okAbYzy7swVjjIrVeb%26690',
            title:'推荐算法应用基础讲解',
            teacher:'导师：XX公司资深高级数据科学家Haven',
            info:'以下是这些视频的一些详细介绍，可能内容会比较长，但是我们可以做',
            viewnum: 2004
          }
        ];
      }, 1000);
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 55px;
    color: #8f8f9f;
  }

  .mui-pull-left {
    height: 100% !important;
    display: flex;
    align-items: center;
    position: relative;
    left: 20px;
  }

  .mui-pull-left img {
    width: 100px;
    height: 32px;
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
    padding: 5px 5px;
    text-align: center;
    font-size: 11px;
  }

  #teacher .list-item img {
    width: 100%;
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
