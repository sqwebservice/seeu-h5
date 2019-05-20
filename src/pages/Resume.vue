<template>
  <div id="resume" class="content">

      <van-nav-bar
          :title="titleName"
          left-arrow
          @click-left="onClickLeft"
      />

    <!--头部头像卡-->
    <div class="container">
      <div class="top">
        <div class="left">
          <div class="name">{{username}}</div>
          <div class="progress">简历完成度60%</div>
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
            <van-icon name="edit" size="24px"/>
        </div>
          <ul style="width: 92%;margin: 0 auto;">
            <van-field v-model="username" type="tel"  placeholder="姓名"  />
            <van-field v-model="age" type="number" placeholder="年龄" />
            <van-field v-model="gender" type="tel" placeholder="性别" />
        </ul>
      </div>
      <!--工作经历-->
      <div class="job-info">
        <div class="title">
          <div>你的工作经历</div>
            <van-icon name="edit" size="24px"/>
        </div>
        <ul style="width: 92%;margin: 0 auto;">
            <van-field v-model="companyName" type="tel" placeholder="公司名称 Company Name"  />
            <van-field v-model="jobTime" type="tel" placeholder="工作时间 Job Time" />
            <van-field v-model="jobTitle" type="tel" placeholder="职务 Job Title" />
            <van-field v-model="jobLocation" type="tel"  placeholder="工作地点 Job Location" />
            <van-field v-model="startDate" type="datetime"  placeholder="开始时间 Start Date" />
            <van-field v-model="endDate" type="datetime" placeholder="结束时间 End Date"  />
            <van-field v-model="jobResponsibilites" type="textarea" autosize rows="1" placeholder="工作职责 Job Responsibilites" />
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
          gender:'',
        companyName:'',
          jobTime:'',
          jobTitle:'',
          jobLocation:'',
          startDate:'',
          endDate:'',
          jobResponsibilites:''

      }
    },
      methods: {
          onClickLeft() {
              this.$router.push({name:'me'})
          }
      }
  }
</script>
<style scoped>


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
  .van-cell {
      padding: 0;
      border-bottom: 1px solid #746e6e !important;

  }

  .van-field__control input{
      border: 0;
  }
  .van-nav-bar__title{
      color: #ffffff;
  }
  .van-nav-bar .van-icon {
      color: #ffffff;
  }
  .van-nav-bar {
      background-color: #67b8bf;
  }
  .van-field__control{
      background-color: #f3f4f4;
  }
</style>
