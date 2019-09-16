<template>
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index1) in pages" :key="(index1+1)">
            <ul class="clear">
              <li v-for="(items,index2) in item" :key="index2+1">
                <div class="icon-box">
                  <svg class="icon icon-logo" aria-hidden="true"> <use xlink:href="'#'+items.svg"></use> </svg>
                </div>
                <p>{{items.name}}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->
        <!-- 如果需要滚动条 -->
        <!--<div class="swiper-scrollbar"></div>-->
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'swiper',
  data () {
    return {
      swiper: null,
      swiperDate: [{name:'美食',svg:'',href:''},{name:'鲜花',svg:'',href:''},{name:'超市',svg:'',href:''},{name:'饮品',svg:'',href:''},{name:'水果',svg:'',href:''},{name:'特惠',svg:'',href:'准时达'},{name:'宵夜',svg:'',href:''},{name:'会员',svg:'',href:''},{name:'自助',svg:'',href:''},{name:'新店',svg:'',href:''},]
    }
  },
  mounted () {
    new Swiper ('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    })
  },
  computed: {
    pages () {
      const pages = [];
      this.swiperDate.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      });
      console.log(pages)
      return pages
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~css/mixin.scss";
  .swiper-container {
    margin: 0 auto;
    @include wh(100%, px2rem(320px));
    background: #ffffff;
    li{
      float: left;
      width: px2rem(120px);
      margin: px2rem(6px) px2rem(33.75px);
      .icon-box{
        @include wh(px2rem(80px), px2rem(80px));
        overflow: hidden;
        margin: 0 auto;
        .icon-logo{
          @include wh(px2rem(80px), px2rem(80px));
        }
      }
      p{
        @include font(px2rem(28px), px2rem(40px));
        text-align: center;
        color: #333333;
      }
    }
  }

</style>
