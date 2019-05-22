<template>
  <div>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="list-item" v-for="item in list" :key="item.id">
          <div class="cover-course">
            <div class="image">
              <img class="img" :src="item.thumb" onerror="javascript:this.src='../../static/images/tc.jpg'">

            </div>
            <div class="details left">
              <div class="title">{{item.title}}</div>
              <div class="teacher">导师：{{item.title}}</div>
              <div class="info" v-html="item.short_description"></div>
            </div>
            <div class="right">
                <div class="numbers"><van-icon name="eye-o" size="16px"/><span>0人看过</span></div>
                <van-button round  type="info" size="mini">{{item.charge==0?'免费试看':item.charge+'元'}}</van-button>

            </div>
          </div>
        </div>

      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import API from '../api';

  export default {
    name: "CourseList",
    props: ['couclasses_id'],
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        isRefresh: false,
        reqParams:{
            couclasses_id: this.couclasses_id,
          page: 1,
          page_size: 10
        }
      }
    },
    methods: {
      onLoad() {
        API.getCourse(this.reqParams).then((re)=>{
          let data = re.data.data;
          console.log(data, 'getCourse');
            if(data && data.length>0){
                this.list.push(...data);
                //this.list=data;
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
      this.$toast(this.couclasses_id);
      console.log(this, 'mounted');

    }
  }
</script>

<style scoped>
  .list-item{
    padding: 5px 15px;
    background-color: white;
  }

  /*cover视频封面介绍*/
  .cover-course{
      padding: 5px;
      margin-top: 5px;
  }
  .cover-course .image{
      width: 100%;
      padding-top:60%;
      display: block;
      position:relative;
      height:0;
  }
  .cover-course .image .img{
      width: 100%;
      height: auto;
      display: block;
      position:absolute;
      top:0;
      left:0;
      height:100%;
  }
  .cover-course .image .play{
      width: 50px;
      height: 50px;
      position: absolute;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
  }
  .cover-course .details{
      line-height: 20px;
      padding: 2px;
  }
  .cover-course .details .title{
      font-size: 16px;
      line-height: 22px;
  }
  .cover-course .details .teacher{
      font-size: 11px;
      margin-bottom: 5px;
  }
  .cover-course .details .info{
      font-size: 11px;
  }
  .cover-course .right{
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align-all: center;
  }
  .cover-course .right .numbers{
      font-size: 10px;
  }
  .numbers span{
      line-height: 17px;
      float: left;
  }
  .van-icon{
      float: left;
  }
  .cover-course .right .button{
      width: auto;
      height: 25px;
      padding: 2px 8px;
      background-color: #61b8be;
      border-radius: 10px;
      font-size: 10px;
      color: white;
  }

</style>
