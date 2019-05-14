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
              <img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556733432157&di=1b49ca8afb8c3bab5b0818bec3eaa949&imgtype=0&src=http%3A%2F%2Fs12.sinaimg.cn%2Fmw690%2F001okAbYzy7swVjjIrVeb%26690">
              <img class="play" src="../../static/images/play-small-new_1daa417.png">
            </div>
            <div class="details left">
              <div class="title">{{item.title}}</div>
              <div class="teacher">导师：XX公司资深高级数据科学家Haven</div>
              <div class="info" v-html="item.content"></div>
            </div>
            <div class="right">
              <div class="numbers"><a class="mui-icon mui-icon-person"></a>10000人看过</div>
              <div class="button">免费试看</div>
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
    props: ['classid'],
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
        API.getCourse(this.classid, this.reqParams).then((re)=>{
          let data = re.data.data;
          console.log(data, 'getCourse');

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
      this.$toast(this.classid);
      console.log(this, 'mounted');

    }
  }
</script>

<style scoped>
  .list-item{
    padding: 5px 15px;
    background-color: white;
  }
</style>
