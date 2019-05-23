<template>
  <div id="su-teacher" ref="listContainer">
      <van-nav-bar
          :title="titleName"
          left-arrow

      />
    <!--通过sticky属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶-->
    <van-tabs v-model="active" sticky  swipeable v-on:change="change" :ellipsis="false">
      <van-tab v-for="item in tabs" :title="item.class" :key="item.id" >
        <TeacherList :classid="item.id" />
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  import API from '../api';

  export default {
    name: "TeacherTeam",
    data() {
      return {
        titleName: '导师团队',
        active: '',
        tabs: [ ]
      }
    },
    created(){
    },
    mounted(){
      this.getTeacherTab();
    },
    updated(){
    },
    methods: {
      getTeacherTab(){
        API.getTeacherTab().then((re)=>{
          console.log(re, 'getTeacherTab');
          this.tabs=re.data.data;
        });
      },
      change(){
        this.$refs.listContainer.scrollTop=0;
      }
    }
  }
</script>

<style scoped>
  #su-teacher{

    position: relative;
  }
</style>
