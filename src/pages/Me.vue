<template>
  <div id="me">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
      <h1 class="mui-title" style="color: #fff;">{{titleName}}</h1>
    </header>

    <div class="me-card">
      <div class="img-dl" style="border-color: rgba(44,62,80, .7);">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556767196638&di=f6f4005f8e5c4909ae9c00a3e53ddcc1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F06%2F20150406H1941_XxKuk.jpeg">
      </div>
      <div class="btn">
        <div @click="edit"><img :src="require('../assets/me/edit.png')">编辑</div>
        <!--<div><img :src="require('../assets/me/setting.png')">设置</div>-->
      </div>
    </div>

    <ul class="selects">
        <li v-for="item in selects" @click="clickItem(item.path)"><img class="icon" :src="item.icon"><span style="flex: 1;">{{item.text}}</span><img class="arrow" :src="require('../assets/ARROW_right.png')"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Me",
    data() {
      return {
        titleName: '个人中心',
        selects: [
          { text: '余额', icon: require('../assets/me/money.png'), path: '/me/' },
          { text: '积分', icon: require('../assets/me/money.png') , path: '/me/'},
          { text: '服务历史', icon: require('../assets/me/money.png') , path: '/me/'},
          { text: '视频观看清单', icon: require('../assets/me/money.png') , path: '/me/'},
          { text: '课程安排', icon: require('../assets/me/money.png') , path: '/me/'},
          { text: '简历管理', icon: require('../assets/me/money.png') , path: '/me/resume'},
          { text: '求职信管理', icon: require('../assets/me/money.png') , path: '/me/'}
        ]
      }
    },
    methods:{
      edit(){
        this.$router.push({name: 'info'})
      },
      clickItem(path){
        console.log(path);
        if(path.search('resume')>=0){
          this.$router.push(path);
        }else{
          mui.toast("开发中...");
        }
      }
    }
  }
</script>

<style scoped>
  #me {
    padding-top: 44px;
    background-color: #efefef;
  }
  .me-card{
    width: 90%;
    margin: 20px auto;
    background-color: #61b8be;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 3px #8f8f94;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
  }
  .me-card .btn{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .me-card .btn>div{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .me-card .btn img{
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }

  /*selects*/
  .selects{

  }
  .selects li{
    background-color: #f7f7f7;
    margin-bottom: 3px;
    color: #727071;
    padding: 10px 25px ;
    display: flex;
    align-items: center;
    position: relative;
  }
  .selects li:hover{
    background-color: #efefef;
  }
  .selects li .icon{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .selects li .arrow{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
  }
  .selects li span{
    width: 20px;
    height: 20px;
  }
</style>
