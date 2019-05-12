<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  /*van的tabs控件样式*/
  .van-tabs__line{
    background-color: #67b8bf;
  }
  .van-tabs__line:after{
    content: '';
    width:0;
    height:0;
    border-width:0 5px 5px;
    border-style:solid;
    border-color:transparent transparent #67b8bf;/*透明 透明  灰*/
    position:absolute;
    bottom: 5px;
    left: 45%;
  }
</style>
