<template>
    <div class="su-tabbar">
        <router-link class="item" :class="{active: active==index}" @click.native="onClick(index)" v-for="(item ,index) in tabs" :to="item.url" >
            <img :src="active==index? item.src.filling:item.src.normal"/><div>{{item.text}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {
              tabs: [
                { src: {normal: require( '../assets/tabbar/home.png'), filling: require( '../assets/tabbar/home-fill.png') },
                    text: '首页', url: "/" },
                { src: { normal: require('../assets/tabbar/book.png'), filling: require('../assets/tabbar/book-fill.png')},
                    text: '测试', url: "/test" },
                { src: { normal:require('../assets/tabbar/all.png'), filling: require('../assets/tabbar/all-fill.png')},
                    text: '分类', url: "/classify" },
                { src: { normal: require('../assets/tabbar/message.png'), filling: require('../assets/tabbar/message-fill.png')},
                    text: '消息', url: "/message" },
                { src: { normal: require('../assets/tabbar/account.png'), filling: require('../assets/tabbar/account-fill.png')},
                    text: '个人中心', url: "/me" }
              ],
              active: 0
            }
        },
        methods:{
            onClick(el){
                this.active = el;
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
    justify-content: flex-end;
    font-size: 11px;
  }
  .su-tabbar .item{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
      line-height: normal;
  }
  .su-tabbar a{
    font-size: 11px;
    color: #333333;
  }
  .su-tabbar .item>img{
    width: 23px;
    height: 23px;
  }
  .su-tabbar .active{
    color: #419ca3;
  }

</style>
