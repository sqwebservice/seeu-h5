<template>
  <div id="su-teacher" ref="listContainer">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
      <a class="mui-action-back mui-icon mui-icon-back mui-pull-left" style="color: #fff"></a>
      <h1 class="mui-title" style="color: #fff;">{{titleName}}</h1>
    </header>

    <!--通过sticky属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶-->
    <van-tabs v-model="active" sticky  :offset-top="44" swipeable v-on:change="change">
      <van-tab v-for="item in tabs" :title="item.class" :key="item.id">
        <TeacherList :classid="item.id"/>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  export default {
    name: "TeacherTeam",
    data() {
      return {
        titleName: '导师团队',
        active: '',
        tabs: [
          { id:1, class: '职业规划师' },
          { id:2, class: '咨询行业' },
          { id:3, class: '快测行业' },
          { id:4, class: '会计行业' },
          { id:5, class: '互联网行业' },
          { id:6, class: '广告行业' },
          { id:7, class: '房地产行业' }
        ]
      }
    },
    methods: {
      change(index, title){
        this.$refs.listContainer.scrollTop=0;
      }
    }
  }
</script>

<style scoped>
  #su-teacher{
    padding-top: 44px;
    padding-bottom: 20px;
    position: relative;
  }
</style>
