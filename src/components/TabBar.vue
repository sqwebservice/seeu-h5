<template>
    <div class="su-tabbar">
      <router-link class="item" v-for="item in tabs" :to="item.url" ><img :src="item.src"/>{{item.text}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {
              tabs: [
                {src: require('../assets/tabbar/home.png'), text: '首页', url: "/"},
                {src: require('../assets/tabbar/book.png'), text: '测试', url: "/test"},
                {src: require('../assets/tabbar/all.png'), text: '分类', url: "/classify"},
                {src: require('../assets/tabbar/message.png'), text: '消息', url: "/message"},
                {src: require('../assets/tabbar/account.png'), text: '个人中心', url: "/me"}
              ]
            }
        }
    }
</script>

<style scoped>
  .su-tabbar{
    width: 100%;
    height: 50px;
    background-color: #dddddd;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 11px;
  }
  .su-tabbar .item{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
  }
  .su-tabbar a{
    font-size: 11px;
    color: #333333;
  }
  .su-tabbar .item>img{
    width: 25px;
    height: 25px;
  }
</style>
