<template>
  <div id="su-course">
      <van-nav-bar
          :title="titleName"
          left-arrow

      />
    <!--通过sticky属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶-->
    <van-tabs v-model="active" sticky animated  swipeable :ellipsis="false">
      <van-tab v-for="item in tabs" :title="item.class_name" :key="item.id" v-on:change="change">
        <CourseList :couclasses_id="item.id"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import API from '../api';

  export default {
    name: "course",
    data() {
      return {
        titleName:'全部课程',
        active:'',
        tabs: []
      }
    },

    created(){
    },
    mounted(){
      this.getCourseClz();
    },
    updated(){
    },
    methods: {
      getCourseClz(){
        API.courseClass().then((re)=>{
          console.warn(re, 'getCourseClz');
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
  #su-course{
    position: relative;
  }

</style>
