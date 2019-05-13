<template>
  <div>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh" >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >

        <div class="cover-item" v-for="item in list" :key="item">
          <div class="image">
            <img class="img" :src="item.url">
          </div>
          <div class="details left">
            <div class="title">11</div>
            <div class="teacher">22</div>
            <div class="info">33</div>
          </div>
          <div class="right">
            <div class="numbers"><a class="mui-icon mui-icon-person"></a>444</div>
            <div class="numbers"><a class="mui-icon mui-icon mui-icon-chatbubble"></a>阅读6666</div>
            <div class="numbers"><a class="mui-icon mui-icon mui-icon-star"></a>收藏77777</div>
            <div class="button">免费试看</div>
          </div>
        </div>



      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import API from '../api';

  export default {
    name: "DatumList",
    props: ['bookid'],
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        isRefresh: false,
        reqParams:{
          page: 1,
          page_size: 10
        }
      }
    },
    methods: {
      onLoad() {
        API.getDatumList(this.bookid, this.reqParams).then((re)=>{
          console.log(re, 'onLoad');
          let data = re.data.data;
          if(!data || data.length==0){
            this.loading = false;
            this.finished = true;
          }
        }).catch(re=>{
          this.loading = false;
        });
      },
      onRefresh(){
        setTimeout(()=>{
          this.isRefresh=false;
          this.$toast('刷新成功!');
        }, 1000);
      },
    },
    mounted(){
      this.$toast(this.bookid);
    }
  }
</script>

<style scoped>
  .cover-item{
    padding: 5px 15px;
    background-color: white;
  }

</style>
