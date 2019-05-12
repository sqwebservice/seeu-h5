<template>
  <div id="su-classify">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
      <h1 class="mui-title" style="color: #fff;">{{titleName}}</h1>
    </header>
    <div class="all">
      <router-link to="/course" class="item">全部课程<div class="bt">点击进入</div></router-link>
      <router-link to="/datum" class="item">资料专区<div class="bt">点击进入</div></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Classify",
    data() {
      return {
        titleName: '分类'
      }
    }
  }
</script>

<style scoped>
  #su-classify{
    padding-top: 44px;
  }
  .all{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  a{
    color: #8f8f94;
  }
  #su-classify .item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    margin-top: 5px;
  }
  #su-classify .bt{
    padding: 4px 8px;
    font-size: 11px;
    background-color: #67b8bf;
    color: white;
    border-radius: 5px;
  }

</style>
