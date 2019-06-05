<template>

  <div>
    <van-swipe :autoplay="3000" indicator-color="#61b8be" >
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img src="'../../static/images/tc.jpgh" onerror="javascript:this.src='../../static/images/tc.jpg'">
      </van-swipe-item>
    </van-swipe>
  </div>

  <!--<div class="mui-slider">-->
    <!--<div class="mui-slider-group mui-slider-loop">-->
      <!--&lt;!&ndash;支持循环，需要重复图片节点&ndash;&gt;-->
      <!--<div class="mui-slider-item" v-for="item in hBanners">-->
        <!--<a href="#">-->
          <!--<img :src="item.path">-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="mui-slider-indicator">-->
      <!--<div v-for="index in indicator" class="mui-indicator" :class="index==1?' mui-active':''"></div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
  import API from '../api';

  export default {
    name: "Banner",
    data() {
      return {
        banners: []
      }
    },
    computed: {
      hBanners(){
        if(this.banners && this.banners.length>=2){
          let temp = this.banners.slice();
          let first = temp[0];
          let last = temp[temp.length -1];
          temp.push(first);
          temp.unshift(last);
          return temp;
        }
        return this.banners;
      },
      indicator: function () {
        return this.hBanners.length>0 ? this.hBanners.length-2:0;
      }
    },
    mounted() {
      // setTimeout(()=>{
      //   this.banners = [
      //     {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556728640132&di=a2c7fa875b2ba1613b726f7d078cf808&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201304%2F30%2F1800246wk88l4blu86dw7l.jpg'},
      //     {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556728657153&di=8b0c13622d2dce1316e334e6ad801edc&imgtype=0&src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F201811%2F21%2F093946ruyys1j4zybqxa94.jpg'},
      //     {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556728672947&di=07f9a147f406c298ac55274d1d3f6ea8&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Feabd70df86412d516645f1b564475f9758ff0c0c.jpg'},
      //   ];
      // }, 500);
      this.getBanners();
    },
    methods: {
      getBanners(){
        API.getBanner().then(re=>{
          this.banners = re.data.data;
        });
      }
    },
    updated(){
      // initSlider();
    }
  }

  //初始化滑动banner
  let initSlider = function() {
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
      interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
    });
  }
</script>

<style scoped>
  /*mui-slider-indicator*/


  .van-swipe-item {
      width: 100%;
      padding-top:30%;
      display: block;
      position:relative;
      height:0;
  }
  .van-swipe-item img{
      width: 100%;
      height: auto;
      display: block;
      position:absolute;
      top:0;
      left:0;
      height:100%;
  }

</style>
