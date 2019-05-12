<template>
  <div id="su-score">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
      <a class="mui-action-back mui-icon mui-icon-back mui-pull-left" style="color: #fff"></a>
      <h1 class="mui-title" style="color: #fff;">{{titleName}}</h1>
    </header>

    <div class="content" v-if="data">
      <div id="analyze" class="panel">
        <div>
          <div class="panel-title">考试整体分析
            <div class="line"></div>
          </div>
        </div>
        <div class="panel-content">
          <ul>
            <li><span class="model">{{data.model}}</span>型人格</li>
            <li class="L2">关键词：<span v-for="item in data.keywords">{{item}}</span></li>
            <li>整体分析: {{data.text}}</li>
          </ul>
        </div>
      </div>

      <div id="chart" class="panel">
        <div>
          <div class="panel-title">职业性格趋向表
            <div class="line"></div>
          </div>
        </div>
        <div class="panel-content">
          <img style="width: 100%;height: auto" :src="data.chart.img">
          <div style="height: auto;margin: 10px auto;font-size: 10px;text-align: center">{{data.chart.text}}</div>
        </div>
      </div>

      <div id="offer" class="panel">
        <div>
          <div class="panel-title">导师规划建议
            <div class="line"></div>
          </div>
        </div>
        <div class="panel-content">
          {{ data.offer }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Score",
    data() {
      return {
        titleName: '成绩报告',
        data:null
      }
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData: function () {
        setTimeout(()=> {
          this.data ={
            model: 'ISTJ',
            keywords: ['严肃','务实','逻辑'],
            text: '1.严肃、安静、籍由集中心志与全力投入,及可被信赖快致成功: 2.行事务实，有序、实际，建辑、真实及可信赖: 3.+分国童且乐于任何事(工作、因家、生活均有良好组织及有序):4.负责任: 5.照设定成效来作出决策目不要阻挠与闲言会坚定为‘之: 6.重视传统与忠诚: 7.传统性的思考者或经理。',
            chart: { img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1967947286,3442057709&fm=26&gp=0.jpg', text:'你可以的！'},
            offer:'你品行优良，待人试思，表理-数。宽厚仁道，不激进，与人争锋，同学乐意亲近。本学期最突出的成果是学习逐步走向正轨，退渐掌握了高中课程的学习方法。你现在一定要树立信心,没有意不过的高山，没有越不过的大海，只要陶怀坚定，坚强果败，乘风破浪会有时。你性格活泼开朗，能说能干，为人大方。宽厚仁道，不激进，不与人争锋，同学乐意亲近。成绩有所回开，但远没有达到你的潜质。不用去想能攀多高，即使路途遥远，只要一步一个脚印，目标始终如一,你的理想一定能实现。'
          }
        }, 500);
      }
    }
  }
</script>

<style scoped>
  #su-score {

  }
  .content{
    width: 100%;
    height: auto;
    margin-top: 64px;
    margin-bottom: 30px;
  }

  .panel{
    margin-top: 10px;
    background: #fff;
  }
  .panel .panel-title{
    padding-left: 10px;
  }
  .panel .panel-content{
    line-height: 25px;
  }
  .panel .panel-title:before {
    content: '';
    width: 0;
    height: 0;
    border-width: 6px 0 6px 6px;
    border-style: solid;
    border-color: transparent transparent transparent #61b8be;
    position: absolute;
    top: 4px;
    left: 0;
    bottom: 0;
  }

  /*整体分析*/
  #analyze li{
    position: relative;
    padding-left: 15px;
    margin: 6px 0;
  }
  #analyze li:before{
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 0;
    top: 7px;
    background-color: #61b8be;
    border-radius: 50%;
  }
  #analyze .model{
    font-size: 30px;
    color: red;
    font-family: "Times New Roman";
    letter-spacing: 0px;
    margin-right: 2px;
  }
  #analyze .L2 span{
    margin: 0 3px;
    color: red;
  }

  /*建议*/
  #offer{
  }
  #offer .panel-content{
    padding-left: 10px;
  }
</style>
