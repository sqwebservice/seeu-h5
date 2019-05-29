<template>
  <div id="su-datum">
      <van-nav-bar
          :title="titleName"
          left-arrow
          @click.native="$router.back(-1)"
      />
    <!--通过sticky属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶-->
    <van-tabs v-model="active" sticky animated  swipeable  :ellipsis="false" style="height: 100%">
      <van-tab v-for="item in tabs" :title="item.name" :key="item.id" v-on:change="change" style="height: 100%">
        <DatumList :class_id="item.id"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import API from '../api';

  export default {
    name: "datum",
    data() {
      return {
        titleName: '全部资料',
        tabs: [],
        active:''
      }
    },

    created(){
    },
    mounted(){
      this.getDatumTab();
    },
    updated(){
    },
    methods: {
      getDatumTab(){
        API.getDatumTab().then((re)=>{
          console.log(re, 'getDatumTab');
          this.tabs=re.data.data;
        });
      },
      change(){
        this.$refs.listContainer.scrollTop=0;
      }
    }
  }

</script>

<style>
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
<style scoped>
  #su-datum{
    position: relative;
  }
</style>
