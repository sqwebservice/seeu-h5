<template>
  <div >
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6" v-for="item in list" :key="item.id">
            <div class="sq-card">
              <img :src="item.avatar">
              <div class="info">
                <div class="info-name">
                  <div class="name"><span class="tag">‘</span>{{item.name}}</div>
                  <div class="line"></div>
                  <span class="titles">SeeU 职业规划师</span>
                </div>
                <div class="more" v-html="item.info">
                </div>
              </div>
              <button class="card-button" @click="yuyue(item)">查看详情</button>
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
    name: "TeacherList",
    props: ['classid'],
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        isRefresh: false,
        reqParams:{
          page: 1,
          page_size: 10,
          class_id:this.classid
        }
      }
    },
    methods: {
      onLoad() {
        API.getTeacherList(this.reqParams).then((re)=>{
          let data = re.data.data;
          console.log(re, 'onLoad');
          if(data && data.length>0){
            this.list=data;
            this.loading = false;
            this.finished = true;
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
          this.isRefresh=false;
          this.$toast('刷新成功!');
        }, 1000);
      },
      yuyue(item){
        this.$router.push({name:'teacherAppointment',params:item });
      },
      mounted(){
        this.$toast(this.classid);
        console.log(this.classid, 'mounted');

      }
    }
  }
</script>

<style scoped>
  .list-item{
    padding: 5px 15px;
    background-color: white;
  }

  /*card*/
  .sq-card{
    width: 100%;
  }
  .sq-card img{
    width: 100%;
    height: auto;
    display: block;
  }
  .sq-card .info{
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    background-color: #35aeb0;
    color: white;
    font-size: 13px;
    text-align: center;
    position: relative;
  }
  .sq-card .info-name{
    width: 100%;
    position: relative;
    padding: 10px;
  }
  .sq-card .info .name{
    width: auto;
    font-size: 1.3em;
    position: relative;
    display: inline;
  }
  .sq-card .name .tag{
    font-size: 100px;
    font-family: "Arial Narrow";
    position: absolute;
    top: 17px;
    bottom: 0;
    left: -16px;
    display: inline;
  }
  .sq-card .info-name .line{
    width: calc(50% + 10px);
    display: block;
    height: 1px;
    background-color: #f0f0f0;
    position: relative;
    top: 0;
    left: calc(50%);
    right: 0px;
    bottom: 0px;
  }
  .sq-card .info .titles{
    font-size: 7px;
  }
  .sq-card .info .more{
    font-size: 7px;
    padding: 5px;
    max-height: 150px;
    min-height: 150px;
  }
  .mui-row .sq-card{
    padding: 10px;
    text-align: center;
  }
  .card-button{
    margin: 0 auto;
    margin-top: 10px;
    width: 60%;
    font-size: 13px;
    padding: 5px 10px;
    background-color: #67b8bf;
    color: white;
    border-radius: 5px;
  }
  .sq-card .info .more p{
      font-size: 7px;
      color: inherit;
  }
</style>
