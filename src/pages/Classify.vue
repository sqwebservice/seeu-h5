<template>
  <div id="su-classify">
      <van-nav-bar :title="titleName">
      </van-nav-bar>
      <van-cell-group >
          <van-cell title="全部课程"  to="/course" >
              <template>
                  <van-button  type="info" size="mini">点击进入</van-button>
              </template>
          </van-cell >
      </van-cell-group>
      <van-cell-group >
          <van-cell title="资料专区"  >
              <template>
                <van-button  type="info" size="mini"  to="/datum">点击进入</van-button>
              </template>
        </van-cell >
      </van-cell-group>
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
  .van-cell-group {
      background-color: #fff;
      margin-top: 5px;
  }
</style>
