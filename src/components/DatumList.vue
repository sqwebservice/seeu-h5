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
            <img class="img" :src="item.thumb" onerror="javascript:this.src='../../static/images/tc.jpg'">

          </div>
          <div class="details left">
            <div class="title">{{item.title}}</div>
            <div class="teacher"></div>
            <div class="info" v-html="item.description"></div>
          </div>
          <div class="right">
              <div class="numbers"><van-icon name="clock-o" size="16px"/><span>{{item.published_at}}</span></div>
            <div class="numbers"><van-icon name="eye-o" size="16px"/><span>阅读{{item.view_num}}</span></div>
            <div class="numbers"><van-icon name="like-o" size="16px"/><span>收藏{{item.view_num}}</span></div>
              <van-button round  type="info" size="mini">免费试看</van-button>
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
    props: ['class_id'],
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        isRefresh: false,
        reqParams:{
            page: 1,
            page_size: 10,
            class_id:this.class_id
        }
      }
    },
    methods: {
      onLoad() {
          console.log(this.reqParams,'reqParams');
          API.getDatumList(this.reqParams).then((re)=>{
          let data = re.data.data;
          console.log(data,'data');
              if(data && data.length>0){
                  this.list.push(...data);
                  this.loading = false;
                  this.reqParams.page++;
                  if(data.length==1){
                      this.finished = true;
                  }
              }else{
                  this.loading = false;
                  this.finished = true;
              }
        }).catch(re=>{
          this.loading = false;
        });
      },
      onRefresh(){
        setTimeout(()=>{
            this.list=[];
            this.reqParams.page=1;
            this.finished = false;
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
<style>
    @font-face {
        font-family: 'my-icon-date';
        src: url('../assets/datum/seeu2-04.png') format('truetype');
    }

    .my-icon-date {
        font-family: 'my-icon-date';
    }
    .my-icon-date-extra:before {
        content:'../assets/datum/seeu2-04.png';
    }
    .cover-item .right .numbers span {
        line-height: 17px;
        float: left;
        margin-left: 2px;
    }
  .cover-item{
    padding: 5px 15px;
    background-color: white;
  }
  /*cover视频封面介绍*/
  .cover .cover-item{
      padding: 5px;
      margin-top: 5px;
  }
  .cover-item .image{
      border-radius: 5px;
      width: 100%;
      padding-top:60%;
      display: block;
      position:relative;
      height:0;
  }
  .cover-item .image .img{
      width: 100%;
      height: auto;
      display: block;
      position:absolute;
      top:0;
      left:0;
      height:100%;
  }
  .cover-item .image .play{
      width: 50px;
      height: 50px;
      position: absolute;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
  }
  .cover-item .details{
      line-height: 20px;
      padding: 2px;
  }
  .cover-item .details .title{
      font-size: 16px;
      line-height: 22px;
  }
  .cover-item .details .teacher{
      font-size: 11px;
  }
  .cover-item .details .info{
      font-size: 11px;
  }
  .cover-item .right{
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align-all: center;
  }
  .cover-item .right .numbers{
      font-size: 10px;

  }
  .cover-item .right .button{
      width: auto;
      height: 25px;
      padding: 2px 8px;
      background-color: #61b8be;
      border-radius: 10px;
      font-size: 10px;
      color: white;
  }
    .van-icon{
        float: left;
    }
</style>
