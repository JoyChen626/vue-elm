<template>
<div class="header">
  <div class="box center">
    <svg class="icon icon-search" aria-hidden="true"> <use xlink:href="#iconsousuo"></use> </svg>
    <span class="title">name</span>
    <div class="right-word"><span>登录</span> | <span>注册</span></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped lang="scss">
  @import '~css/mixin';
  .header{
    height: px2rem(90px);
    background: #409EFF;
    .box{
      text-align: center;
      position: relative;
      .icon-search{
        position: absolute;
        top: 0;
        left: 0;
        @include wh(px2rem(40px), px2rem(40px));
        margin-top: px2rem(25px);
      }
      .title{
        color: #ffffff;
        @include font(px2rem(36px), px2rem(90px));
      }
      .right-word{
        position: absolute;
        top: 0;
        right: 0;
        color: #ffffff;
        span{
          color: #ffffff;
          @include font(px2rem(28px), px2rem(40px));
          margin-top: px2rem(25px);
        }
      }
    }
  }

</style>
