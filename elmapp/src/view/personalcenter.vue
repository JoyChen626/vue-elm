<template>
    <div class="personalcenter">
      <div class="top">
        <span class="set">设置</span>
        <p><span v-if="vip>0">VIP:{{vip}}级</span><span v-else>开通会员</span></p>
        <div class="photo-box">
          <img src="" alt="">
        </div>
        <p class="name">{{name}}</p>
      </div>
      <div class="body">
        <ul>
          <li class="clear" v-for="(item, index) in titlelist" :key="index"><span class="left">{{item.title}}</span><span class="icon right">icon</span></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'personalcenter',
  data () {
    return {
      vip: 0,
      name: 'xxxx',
      titlelist: [{title: '1111'}, {title: '2222'}, {title: '3333'}, {title: '4444'}]
    }
  }
}
</script>

<style scoped lang="scss">
  .top{
    position: relative;
  }

</style>
