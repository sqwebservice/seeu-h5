<template>
  <div>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh" >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >

        <div class="cover-item" v-for="item in list" :key="item.id">
          <div class="image">
            <img class="img" :src="item.thumb">
          </div>
          <div class="details left">
            <div class="title">{{item.title}}</div>
            <div class="teacher"></div>
            <div class="info" v-html="item.content"></div>
          </div>
          <div class="right">
            <div class="numbers"><a class="mui-icon mui-icon-person"></a>{{item.published_at}}</div>
            <div class="numbers"><a class="mui-icon mui-icon mui-icon-chatbubble"></a>阅读{{item.view_num}}</div>
            <div class="numbers"><a class="mui-icon mui-icon mui-icon-star"></a>收藏{{item.view_num}}</div>
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
    props: ['book_id'],
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        isRefresh: false,
        reqParams:{
          page: 1,
          page_size: 10,
          book_id:this.book_id
        }
      }
    },
    methods: {
      onLoad() {
        API.getDatumList(this.reqParams).then((re)=>{
          let data = re.data.data;
          if(data && data.length>0){
            this.list=data;
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

    }
  }
</script>

<style scoped>
  .cover-item{
    padding: 5px 15px;
    background-color: white;
  }

</style>
