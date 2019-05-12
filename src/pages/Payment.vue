<template>
  <div id="su-payment">
    <header class="mui-bar mui-bar-nav" style="background-color: #67b8bf;color: #fff;">
      <a class="mui-action-back mui-icon mui-icon-back mui-pull-left" style="color: #fff"></a>
      <h1 class="mui-title" style="color: #fff;">{{titleName}}</h1>
    </header>
    <div class="content" >
      <!--缴费项目明细-->
      <div class="pay-items">
        <div class="title">缴费明细</div>
        <ul>
          <li v-for="item in cost">
            <div class="items">{{item.text}}</div>
            <div class="details">￥{{item.money}}</div>
          </li>
          <li>
            <div class="items"></div>
            <div class="details">合计：￥{{ getCount }}</div>
          </li>
        </ul>
      </div>

      <!--支付方式-->
      <div class="payway">
        <div class="title">选择支付方式</div>
        <div class="payway-items">
          <div>
            <label class="sq-radio2" style="width: 100%;">
              <div style="width: 100%"><img src="../../static/images/alipay-icon.png"></div>
              <input type="radio" name="q2">
              <i class="mui-icon"></i>
            </label>
          </div>
          <div>
            <label class="sq-radio2" style="width: 100%">
              <div style="width: 100%"><img src="../../static/images/weixin-icon.png"></div>
              <input type="radio" name="q2">
              <i class="mui-icon"></i>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="text">总计：<span class="date-text">￥{{getCount}}</span></div>
      <button class="sq-button" @click="pay">立即缴费</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Payment",
    data() {
      return {
        titleName: '在线缴费',
        cost: [  ],
      }
    },
    computed:{
      getCount(){
        let count = 0;
        this.cost.forEach(value=>{
          count+=value.money;
        });
        return count;
      }
    },
    mounted() {
      setTimeout(()=>{
        this.cost.push(...[
          { text:'辅导费缴纳', money: 200.00 },
          { text:'辅导费缴纳', money: 200.00 },
          { text:'辅导费缴纳', money: 200.00 },
        ]);
      }, 1000);
    },
    methods: {
      pay(){
        this.$dialog.alert({
          message: '支付成功'
        });
      }
    }
  }
</script>

<style scoped>
  #su-payment{
    padding-top: 44px;
    height: 100%;
  }

  .content{
    width: 100%;
    height: auto;
  }
  .content .title{
    font-size: 13px;
    color: #333;
    padding: 10px;
  }
  .pay-items{
    background-color: #efefef;
  }
  .content .pay-items ul{
    padding: 10px 20px;
    background-color: white;
  }
  .content .pay-items ul li{
    padding: 3px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .payway{
    margin-top: 5px;
    background-color: white;
  }

  /*radio*/
  .sq-radio2 {
    font-size: 13px;
    vertical-align: center;
    text-align-all: center;

    position: relative;
    display: inline-block;
    font-weight: 400;
    color: #333;
    padding-left: 25px;
    cursor: pointer;
  }
  .sq-radio2 input {
    position: absolute;
    left: -9999px;
  }
  .sq-radio2 i {
    display: block;
    position: absolute;
    top: 5px;
    right: 30px;
    width: 22px;
    height: 22px;
    outline: 0;
    border: 1px solid #61b8be;
    background: #fff;
    border-radius: 50%;
    transition: border-color .3s;
    -webkit-transition: border-color .3s;
    color: white;
  }
  .sq-radio2 input + i:after{
    position: absolute;
    content: "\e472";
    top: 0px;
    right: -1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #419ca3;
    opacity: 0;
    transition: opacity .1s;
    -webkit-transition: opacity .1s;
    padding-right: 2px;
    text-align-all: center;
  }
  .sq-radio2 input:checked + i:after {
    opacity: 1;
  }
  .sq-radio2 .mui-icon{
    line-height: unset;
  }
  .sq-radio2 img{
    width: 40px;
    height: 40px;
  }
</style>
