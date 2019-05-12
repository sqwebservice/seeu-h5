<template>
  <div id="su-info">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
      <a class="mui-action-back mui-icon mui-icon-back " style="color: #fff"></a>
      <h1 class="mui-title" style="color: #fff;text-align: left">{{titleName}}</h1>
    </header>

    <div class="content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <div class="mui-navigate-right sq-cell-item sq-cell-item-flex">
            <a class="" style="margin: 0 0">上传头像</a>
            <div class="photo">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556688847163&di=91c7b00ff8df82b492da231edc05b0dd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F22%2F20120822162710_jHHkk.thumb.224_0.jpeg">
            </div>
          </div>
        </li>
        <li class="mui-table-view-cell">
          <div class="mui-navigate-right sq-cell-item">
            <a class="">姓名</a>
          </div>
        </li>
        <li class="mui-table-view-cell">
          <div class="mui-navigate-right sq-cell-item">
            <a class="">性别</a>
          </div>
        </li>
        <li class="mui-table-view-cell">
          <div class="mui-navigate-right sq-cell-item">
            <a class="">出生日期</a>
          </div>
        </li>
        <li class="mui-table-view-cell">
          <div class="mui-navigate-right sq-cell-item">
            <a class="">国籍</a>
          </div>
        </li>
        <li class="mui-table-view-cell">
          <div class="mui-navigate-right sq-cell-item">
            <a class="">手机号</a>
          </div>
        </li>
        <li class="mui-table-view-cell">
          <div class="sq-cell-item sq-cell-item-flex" style="padding-top: 6px;padding-bottom: 6px;">
            <a class="">验证码</a>
            <button style="background-color: #419ca3;padding: 4px 8px;font-size: 12px;color: white;">点击获取</button>
          </div>
        </li>
      </ul>
    </div>

    <div style="width: 70%;margin-top: 50px;margin-left: auto;margin-right: auto;">
      <button class="sq-button">注册</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data() {
      return {
        titleName: '请完善以下资料'
      }
    }
  }
</script>

<style scoped>
  #su-info{

  }

  .content{
    margin-top: 44px;
  }
  .sq-cell-item{
    padding: inherit;
  }
  a{
    color: #333333;
  }
  .sq-cell-item-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 14px;
  }
  .sq-cell-item-flex .photo{
    background-color: transparent;
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .sq-cell-item-flex .photo>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>
