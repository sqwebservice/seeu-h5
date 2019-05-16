<template>
  <div id="resume" class="content">

      <van-nav-bar
          title="titleName"
          left-text="返回"
          right-text="按钮"
          left-arrow
          bind:click-left="onClickLeft"
          bind:click-right="onClickRight"
          style="background-color: #67b8bf;color: #fff;"
      />

    <!--头部头像卡-->
    <div class="container">
      <div class="top">
        <div class="left">
          <div class="name">某某某</div>
          <div class="progress">简历完成度60%1</div>
        </div>
        <div class="right">
          <div class="img-dl">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556767196638&di=f6f4005f8e5c4909ae9c00a3e53ddcc1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F06%2F20150406H1941_XxKuk.jpeg">
          </div>
        </div>
      </div>
      <div class="btn"><a>查看模板</a>&nbsp;<a>下载简历</a></div>
    </div>

    <!--信息-->
    <div class="info">
      <!--个人基本信息-->
      <div class="base-info">
        <div class="title">
          <div>基本信息</div>
          <div class="mui-icon mui-icon-compose"></div>
        </div>
        <ul >
            <van-field v-model="username" placeholder="姓名"  />
            <van-field v-model="age" type="number" placeholder="年龄" />
            <van-field v-model="gender" placeholder="性别" />
        </ul>
      </div>
      <!--工作经历-->
      <div class="job-info">
        <div class="title">
          <div>你的工作经历</div>
          <div class="mui-icon mui-icon-compose"></div>
        </div>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">Company Name</li>
          <li class="mui-table-view-cell">Job Time</li>
          <li class="mui-table-view-cell">Job Title</li>
          <li class="mui-table-view-cell">Job Location</li>
          <li class="mui-table-view-cell">Start Date</li>
          <li class="mui-table-view-cell">End Date</li>
          <li class="mui-table-view-cell">Job Responsibilites</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Resume",
    data() {
      return {
        titleName: '制作简历',
        username:'周周强',
        age:'',
        gender:''
      }
    }
  }
</script>

<style scoped>
  #resume{
    padding-top: 44px;
  }

  .content{
    width: 100%;
    height: auto;
    margin-top: 0px;
    margin-bottom: 30px;
    position: relative;
  }

  .content .title{
    font-size: 15px;
    color: #61b8be;
    padding:10px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  /*顶部头像显示*/
  .content .container{
    margin: 15px;
    background-color: white;
    font-size: 13px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.3);
  }
  .content .top{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 10px 30px;
  }
  .content .top .left{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .content .top .img-dl{
    width: 80px;
    height: 80px;
    border: 2px solid #61b8be;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .content .top .img-dl img{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 1px solid grey;
  }
  .content .container .btn{
    font-size: 15px;
    background-color: #61b8be;
    padding: 10px;
    color: white;
    text-align: center;
  }
  .content .container .btn a{
    color: white;
  }
  .content .container .btn a:hover{
    color: grey;
  }

  .mui-table-view{
    background-color: transparent !important;
    font-size: 13px;
  }
  .van-cell{
      padding: 0;
  }
  .van-field__control input{
      border: 0;
  }
</style>
