<template>
<div class="home">
  <home-header></home-header>
  <home-swiper></home-swiper>
  <div class="title"><span>icon</span><span>附近商家</span></div>
  <home-list :lists="lists" :positionTop="top"></home-list>
</div>
</template>

<script>
import homeHeader from '../components/common/header'
import homeSwiper from '../components/common/swiper'
import homeList from '../components/list'
export default {
  name: 'home',
  components: {homeHeader, homeSwiper, homeList},
  data () {
    return {
      lists: [],
      top: 492/37.5,
    }
  },
  mounted () {
    this.$axios.get('../../static/shoplist.json').then((res) => {
      let list = res.data;
      this.lists = list;
    }).catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style scoped lang="scss">
  @import "~css/mixin";
  .home{
    background: #eeeeee;
  }
  .title{
    background: #ffffff;
    margin-top: px2rem(20px);
    span{
      @include font(px2rem(28px), px2rem(60px));
      border-bottom: 1px solid #eeeeee;
      color: #dddddd;
    }
  }
</style>
