<template>
    <div class="other clear">
      <div class="left-box left">
        <ul>
          <li class="phone" ref="phone_li"  v-for="(item,index) in users" :key="index" :style="{background: (index%4==0?'lightcyan':'lavender')}">{{item.name}}</li>
        </ul>
      </div>
      <div class="right-box right">
        <ul><li v-for="(item,index) in idlist" :key="index" @click="linkTo(item)">{{item.name}}</li></ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'other',
  data () {
    return {
      users: [
        {id: 0, name: 'a'},
        {id: 1, name: 'ahat'},
        {id: 2, name: 'aocial'},
        {id: 3, name: 'aircle'},
        {id: 4, name: 'b'},
        {id: 5, name: 'bhat'},
        {id: 6, name: 'bocial'},
        {id: 7, name: 'bircle'},
        {id: 8, name: 'c'},
        {id: 9, name: 'chat'},
        {id: 10, name: 'cocial'},
        {id: 11, name: 'circle'},
        {id: 12, name: 'd'},
        {id: 13, name: 'dhat'},
        {id: 14, name: 'docial'},
        {id: 15, name: 'dircle'},
        {id: 16, name: 'e'},
        {id: 17, name: 'ehat'},
        {id: 18, name: 'eocial'},
        {id: 19, name: 'eircle'}
      ],
      idlist: [{id: 0, name: 'a'}, {id: 4, name: 'b'}, {id: 8, name: 'c'}, {id: 12, name: 'd'}, {id: 16, name: 'e'}]
    }
  },
  methods: {
    linkTo (res) {
      for (let i in this.users) {
        let item = this.users[i];
        if (item.id == res.id) {
          let top = this.$refs.phone_li[i].offsetTop;
          let html = document.getElementsByTagName('html')[0];
          html.offsetTop = top;
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .other{
    .left-box{
      width: 95%;
      .phone{
        line-height: 40px;
        padding: 0 10px;
      }
    }
    .right-box{
      width: 5%;
      background: #ffffff;
      li{
        text-align: center;
        line-height: 40px;
        font-size: 14px;
      }
    }
  }

</style>
