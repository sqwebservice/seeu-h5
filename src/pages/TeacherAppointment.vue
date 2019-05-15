<template>
    <div id="su-yuyue">
      <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
        <a class="mui-action-back mui-icon mui-icon-back mui-pull-left" style="color: #fff"></a>
        <h1 class="mui-title" style="color: #fff;">{{titleName}}</h1>
      </header>

      <div class="content" >
        <div class="teacher">
          <div class="photo">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3361187273,328930179&fm=26&gp=0.jpg">
          </div>
          <div class="text">
            <span style="font-size: 18px">Sophia.Lin</span>
            <ul>
              <li>毕业院校：英国佐治亚大学</li>
              <li>工作经验：5年+</li>
              <li>与世界五百强企业有着密切的业务往来</li>
            </ul>
          </div>
        </div>
        <div class="sel-date">
          <div class="tab-bar">
            <div class="tab-bar-item">
              <div class="date " >04-29</div>
              <div class="week">周一</div>
            </div>
            <div class="tab-bar-item">
              <div class="date">04-30</div>
              <div class="week">周二</div>
            </div>
            <div class="tab-bar-item active">
              <div class="date">05-01</div>
              <div class="week">周三</div>
            </div>
            <div class="tab-bar-item">
              <div class="date">05-02</div>
              <div class="week">周四</div>
            </div>
            <div class="tab-bar-item">
              <div class="date">05-03</div>
              <div class="week">周五</div>
            </div>
            <div class="tab-bar-item">
              <div class="date">05-04</div>
              <div class="week">周六</div>
            </div>
            <div class="tab-bar-item">
              <div class="date">05-05</div>
              <div class="week">周日</div>
            </div>
          </div>

          <div class="time">
            <div class="time-item">
              <div class="title">上午预约</div>
              <div class="list">
                <div class="list-item active">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
              </div>
            </div>
            <div class="time-item">
              <div class="title">下午预约</div>
              <div class="list">
                <div class="list-item active">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
              </div>
            </div>
            <div class="time-item">
              <div class="title">晚上预约</div>
              <div class="list">
                <div class="list-item active">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
                <div class="list-item">07:00</div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="footer">
        <div class="text">选择预约时间：<span class="date-text">今天07:30</span></div>
        <button class="sq-button" @click="toPay">确定预约</button>
      </div>
    </div>
</template>
<script>
    import API from '../api';

    export default {
        name: "teacherAppointment",
        props: ['params'],
        data() {
            return {
                titleName: '导师预约'
            }
        },
        methods:{
            toPay(){
                console.log(this.$route.params,'11');
                //this.$router.push({name: 'payment'})
            }
        }
    }
</script>


<style scoped>
  #su-yuyue{
    padding-top: 44px;
    padding-bottom: 20px;
    position: relative;
  }

  .content{
    width: 100%;
    height: auto;
  }

  .teacher{
    padding: 10px;
    color: #333333;
    font-size: 13px;
  }
  .teacher .photo{
    width: 100px;
    height: 100px;
    display: inline-block;
  }
  .teacher .photo img{
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  .teacher .text{
    display: inline-block;
    margin-left: 10px;
  }

  /*select-date*/
  .sel-date{
    width: 100%;
    margin-top: 15px;
  }
  .sel-date .tab-bar{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    font-size: 13px;
    color: #8f8f94;
  }
  .sel-date .tab-bar .tab-bar-item{
    position: relative;
    padding: 8px 0px;
  }
  .sel-date .tab-bar .active{
    color: #333333;
  }
  .sel-date .tab-bar .active:after{
    content: '';
    width: 100%;
    height: 3px;
    background-color: #35aeb0;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  /*time*/
  .time{
    padding: 10px 20px;
    font-size: 13px;
    position: relative;
  }
  .time .time-item{
    position: relative;
  }
  .time .title{
    position: relative;
    padding-left: 10px;
    margin: 5px 0;
  }
  .time .title:before{
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: #61b8be;
    top: 0;
    left: 0;
  }
  .time .time-item .list{
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: #333333;
    font-size: 13px;
    flex: 5;
    flex-wrap: wrap;
  }
  .time .time-item .list .list-item{
    flex: 0 0 20%;
    text-align: center;
    margin-top: 10px;
    position: relative;
  }
  .time .time-item .list .active{
    outline:#61b8be solid 1px;
  }
  .time .time-item .list .active:after{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
    border-width:  0 0 15px 25px;
    border-style: solid;
    border-color: transparent transparent #67b8bf;
  }
  .time .time-item .list .active:before{
    content: '✓';
    position: absolute;
    right: 2px;
    bottom: 0;
    top:6px;
    font-size: 1mm;
    z-index: 9;
    color: white;
  }

  /*footer*/
  .footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  .footer .text{
    width: 100%;
    background-color: #dcdddd;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
  .footer button{
    width: 40%;
    height: 44px;
    background-color: #67b8bf;
  }
  .footer .date-text{
    color: #67b8bf;
    font-size: 18px;
  }
</style>
