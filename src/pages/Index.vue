<template>
  <div id="su-index">
    <div id="router">
      <keep-alive >
          <router-view></router-view>
      </keep-alive>
    </div>
    <div id="su-tabbar">
      <tab-bar></tab-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #su-index {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    position: fixed;
  }
  #router {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  #router>div {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  #su-tabbar{
    width: 100%;
    height: 50px;
  }
</style>
