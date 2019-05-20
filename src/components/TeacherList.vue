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
                <div class="tc-img">
                    <img :src="item.avatar" onerror="javascript:this.src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718275056&di=7c9f2516ce0f341cb28291d46ab129f7&imgtype=0&src=http%3A%2F%2Fimage-258.258.com%2F258com%2F20171111%2Fdd6b7f47fa6e430b5440121fa75e491a.jpg'" >
                </div>
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
          page_size: 2,
          class_id:this.classid
        }
      }
    },
    methods: {
      onLoad() {
        API.getTeacherList(this.reqParams).then((re)=>{
          let data = re.data.data;
            console.log(data,this.reqParams.page);
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
      position:absolute;
      top:0;
      left:0;
      height:100%;
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
    max-height: 120px;
    min-height: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      flex-direction: column;
  }
  .info p{
      overflow: hidden !important;
      font-size: 7px !important;
      color: #fff !important;

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
  .tc-img{
      width: 100%;
      padding-top:100%;
      display: block;
      position:relative;
      height:0;
  }
</style>
<style >
    .info p{
        overflow: hidden !important;
        font-size: 7px !important;
        color: #fff !important;

    }

</style>
