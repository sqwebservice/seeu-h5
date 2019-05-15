<template>
  <div id="su-message">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
      <h1 class="mui-title" style="color: #fff;">{{titleName}}</h1>
    </header>

    <div class="title">您有<strong>{{ count }}</strong>条新的通知</div>
    <div class="mes-list">
      <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="item" v-for="item in datas" :id="item.id" @click="toDetails(item.id)">
            <span style="color: red;margin-right: 10px;font-size: 11px;">●</span>
            {{ item.text }}
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        titleName: '消息',
        loading: false,
        finished: false,
        isRefresh: false,
        datas: []
      }
    },
    mounted(){
    },
    computed: {
      count(){
        return this.datas.length;
      }
    },
    methods:{
      toDetails(id){
        mui.toast(id);
      },
      onLoad() {
        this.datas.push(...[
          { id: 1, text: '测评结果已出' },
          { id: 2, text: '您预约的课程' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
          { id: 3, text: '恭喜你成功预约' },
        ]);
        this.loading = false;
      },
      onRefresh(){
        setTimeout(()=>{
          this.isRefresh=false;
          this.$toast('刷新成功!');
        }, 1000);
      },
    }
  }
</script>

<style scoped>
  #su-message{
    padding-top: 44px;
    font-size: 16px;
  }

  .title{
    width: 100%;
    margin-top: 20px;
    padding: 0px 20px;
  }
  .mes-list{
    width: 100%;
  }
  .mes-list .item{
    width: 100%;
    background-color: white;
    margin-top: 5px;
    padding: 10px 20px;
  }
</style>
