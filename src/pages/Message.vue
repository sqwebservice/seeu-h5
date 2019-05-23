<template>
  <div id="su-message">
      <van-nav-bar :title="titleName">
      </van-nav-bar>

    <div class="title"><span>您有<strong>{{ count }}</strong>条新的通知</span></div>
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
        this.$toast(id);
      },
      onLoad() {
        this.datas.push(...[
          { id: 1, text: '测评结果已出' },
          { id: 2, text: '您预约的课程' },
          { id: 3, text: '恭喜你成功预约恭喜你成功预约恭喜你成功预约恭喜你成功预约恭喜你成功预约恭喜你成功预约恭喜你成功预约' },
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
    font-size: 16px;
  }

  .title{
    width: 100%;
      padding: 10px 0;
  }
  .title span{
      margin:20px;
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
