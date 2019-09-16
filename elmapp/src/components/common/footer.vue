<template>
    <div class="footer">
      <div class="footer-box">
        <div class="list-btn">
          <svg class="icon icon-car" aria-hidden="true"> <use xlink:href="#icongouwuchekong"></use> </svg>
        </div>
        <div class="money-box">
          <p class="money">￥ {{money}}</p>
          <p class="send">配送费 {{send}} 元</p>
        </div>
        <div class="next-btn"> 确 定 </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      money: 54,
      send:0
    }
  }
}
</script>
<style scoped lang="scss">
  @import "~css/mixin";
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    @include wh(100%,px2rem(80px));
    background: #444444;
    z-index: 9999;
    .footer-box{
      position: relative;
      @include wh(100%,px2rem(80px));
      .list-btn{
        position: absolute;
        background: #444444;
        @include borderRadius(50%);
        left: px2rem(15px);
        bottom: px2rem(15px);
        padding: px2rem(25px);
        border: px2rem(8px) solid #555555;
        @include wh(px2rem(120px),px2rem(120px));
        .icon-car{
          @include wh(px2rem(60px),px2rem(60px));
        }
      }
      .money-box{
        margin-left: px2rem(160px);
        .money{
          padding-top: px2rem(10px);
          @include font(px2rem(28px), px2rem(40px));
          font-weight: bold;
          color: #ffffff;
        }
        .send{
          padding-bottom: px2rem(4px);
          @include font(px2rem(24px), px2rem(26px));
          color: #ffffff;
        }
      }
      .next-btn{
        position: absolute;
        right: 0;
        top: 0;
        padding: px2rem(1px) px2rem(60px);
        @include font(px2rem(28px),px2rem(80px));
        text-align: center;
        color: #ffffff;
        background: lightgreen;
      }
    }

  }
</style>
