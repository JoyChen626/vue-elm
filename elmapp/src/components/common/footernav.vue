<template>
    <div class="footernav">
      <ul>
        <li v-for="(item,index) in navlist" :key="index">
          <span>{{item.icon}}</span>
          <p class="navtitle">{{item.title}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      navlist: [{icon: '', title: '1'}, {icon: '', title: '2'}, {icon: '', title: '3'}, {icon: '', title: '4'}]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~css/mixin";
  .footernav{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ffffff;
    width: 100%;
    height: px2rem(95px);
  }

</style>
