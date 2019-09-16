<template>
  <div class="list">
    <div class="view-wrapper" :style="{top:positionTop+'rem'}">
      <cube-recycle-list class="list" :infinite="infinite" :size="size" :on-fetch="onFetch">
        <!-- tombstone 的作用域插槽 slot-scope 必须声明 -->
        <template slot="tombstone" slot-scope="props">
          <div class="item tombstone">
            <div class="avatar"></div>
            <div class="bubble">
              <p></p>
              <p></p>
              <p></p>
              <div class="meta">
                <time class="posted-date"></time>
              </div>
            </div>
          </div>
        </template>
        <template slot="item" slot-scope="{ data }">
          <div :id="data.id" class="item clear" @click="handleClick(data)">
            <div class="shop-logo-box left">
              <img :src="data.img" alt="">
            </div>
            <div class="word-box right">
              <div class="clear">
                <h3 class="ellipsis left">{{data.name}}</h3>
                <ul class="mack right clear">
                  <li class="left" v-if="data.piao">票</li>
                  <li class="left" v-if="data.bao">保</li>
                </ul>
              </div>
              <div class="clear">
                <cube-rate class="start left" v-model="value" :max="max" :justify="justify"></cube-rate>
                <span class="score left">{{data.score}}</span>
                <span class="number left">月售{{data.num}}单</span>
                <ul class="privilege clear right">
                  <li class="left">蜂鸟专送</li>
                  <li class="left">准时达</li>
                </ul>
              </div>
              <p class="details clear"><span class="left">{{data.min}}元起送/配送费{{data.run}}元</span><span class="right">{{data.juli}}km/约{{data.time}}分钟</span></p>
            </div>
          </div>
        </template>
         <div class="spinner" slot="spinner"><svg class="icon icon-wait" aria-hidden="true"> <use xlink:href="#icondengdai"></use> </svg></div>
         <div class="noMore" slot="noMore">没有更多数据了</div>
      </cube-recycle-list>
    </div>
  </div>
</template>

<script>
export default {
  props: {lists: {type: Array, default: []},positionTop: {type: Number,default: 0}},
  name: 'list',
  data () {
    return {
      size: 20,
      offset: 100,
      infinite: false,
      value: 4,
      max: 5,
      justify: true
    }
  },
  methods: {
    onFetch() {
      let items = [];
      let self = this;
      return new Promise((resolve) => {
        setTimeout(() => {
          for (let i = 0; i < self.lists.length; i++) {
            items.push(self.lists[i]);
          }
          resolve(items)
        }, 500)
      })
    },
    handleClick(data) {
      console.log('Item:' + data)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~css/mixin";
  .list{
    background: #ffffff;
  }
  .view-wrapper{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #ffffff;
    .item{
      padding: px2rem(20px);
      display: flex;
      border-bottom: 1px solid #eeeeee;
      .shop-logo-box{
        @include wh(px2rem(160px), px2rem(160px));
        overflow: hidden;
        margin-right: px2rem(20px);
        img{
          @include wh(px2rem(160px), px2rem(160px));
        }
      }
      .word-box{
        flex: 1;
        h3{
          width: px2rem(320px);
          @include font(px2rem(32px),px2rem(60px));
          color: #000000;
          font-weight: bold;
        }
        .mack{
          li{
            @include wh(px2rem(32px), px2rem(32px));
            border: 1px solid #dddddd;
            color: #dddddd;
            line-height: px2rem(32px);
            font-size: px2rem(24px);
            text-align: center;
            @include borderRadius(px2rem(4px));
            margin: px2rem(13px) px2rem(4px);
          }
        }
        .start{
          @include wh(px2rem(140px), px2rem(50px));
        }
        .score{
          @include font(px2rem(24px),px2rem(50px));
          color: salmon;
          margin: 0 px2rem(8px);
        }
        .number{
          @include font(px2rem(24px),px2rem(50px));
          color: #dddddd;
        }
        .privilege{
          li{
            @include font(px2rem(24px), px2rem(32px));
            border: 1px solid #409EFF;
            padding: 0 px2rem(4px);
            margin: px2rem(8px) px2rem(4px);
            @include borderRadius(px2rem(4px));
            &:nth-child(1){
              background: #409EFF;
              color: #ffffff;
            }
            &:nth-child(2){
              color: #409EFF;
            }
          }
        }
        .details{
          span{
            @include font(px2rem(24px),px2rem(40px));
            color: #999999;
          }
        }
      }
    }
  }
  .spinner{
    text-align: center;
    padding: px2rem(10px);
    .icon-wait{
      @include wh(px2rem(60px), px2rem(60px));
      transform:rotate(360deg);
      -webkit-transition:-webkit-transform 1s linear;
      transition:transform 1s linear;
    }
  }
  .noMore{
    @include font(px2rem(28px), px2rem(50px));
    text-align: center;
    color: #999999;
  }
</style>
