<template>
    <div class="inshop">
      <div class="back">
        <span></span>
      </div>
      <div class="shop-header">
        <div class="clear info-box">
          <div class="shop-logo left"></div>
          <div class="shop-detail right">
            <h2 class="shop-name ellipsis">新世界新世界（张江店）</h2>
            <p class="info">商家配送/15元起送/45分钟送达</p>
            <div class="gg"><p class="ellipsis">公告：从即日起从即日起从即日起从即日起</p><span>></span></div>
          </div>
        </div>
        <div class="news" v-if="activeLists.length>0" :style="{height: height + 'rem'}">
            <ul @click="showNew()">
              <li v-for="item in activeLists" :key="item.id"><span class="new" v-if="item.new">新</span><span class="vip" v-if="item.vip">vip</span>{{item.active}}</li>
            </ul>
            <span class="activeSize">{{activeLists.length}}个活动</span>
        </div>
      </div>
      <div class="scroll-nav-wrapper">
        <cube-scroll-nav
          :side=true
          :data="goods"
          v-if="goods.length"
        >
          <cube-scroll-nav-panel
            v-for="good in goods"
            :key="good.name"
            :label="good.name"
            :title="good.name"
          >
            <ul>
              <li
                v-for="food in good.foods"
                :key="food.name"
                class="food-item"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cart-control-wrapper">
                  </div>
                </div>
              </li>
            </ul>
          </cube-scroll-nav-panel>
        </cube-scroll-nav>
      </div>
      <shop-footer></shop-footer>
    </div>
</template>

<script>
import shopFooter from '../components/common/footer'
export default {
  name: 'inshop',
  components: {shopFooter},
  data () {
    return {
      activeLists: [{id:1,new:true,active: '新用户新用户新用户新用户'},{id:2,active: '新用户新用户新用户新用户'},{id:3,vip:true,active: '新用户新用户新用户新用户'},{id:4,active: '新用户新用户新用户新用户'}],
      height: 60/37.5,
      goods: [],
      current: ''
    }
  },
  mounted () {
    this.$axios.get('../../static/mock/data.json').then((res) => {
      let food = res.data;
      this.goods = food;
      this.current = food[0].name;
    }).catch((error) => {
      console.log(error);
    })
  },
  methods: {
    showNew () {
      if (this.height == 60/37.5) {
        this.height = (50*this.activeLists.length)/37.5;
      } else {
        this.height = 60/37.5;
      }
    },
    changeHandler(label) {
      console.log('changed to:', label)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~css/mixin";
  .back{
    position: relative;
    height: px2rem(90px);
    padding: 0 3%;
    background: #409EFF;
    .icon-back{
    }
  }
  .shop-header{
    background: rgba(0,255,255,.3);
    padding-bottom: px2rem(20px);
  }
  .info-box{
    display: flex;
    width: 100%;
    padding: px2rem(20px);
    .shop-logo{
      @include wh(px2rem(200px), px2rem(200px));
      @include borderRadius(50%);
      overflow: hidden;
      margin-right: px2rem(20px);
    }
    .shop-name{
      width: px2rem(300px);
      @include font(px2rem(32px), px2rem(60px));
      color: #ffffff;
      font-weight: bold;
    }
    .info,.gg p{
      @include font(px2rem(24px), px2rem(40px));
      color: #ffffff;
    }
    .gg{
      position: relative;
    }
    .gg p{
      width: px2rem(200px);
    }
    .gg span{
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .news{
    transition: .5s;
    padding: px2rem(20px);
    overflow: hidden;
    position: relative;
    li{
      @include font(px2rem(24px), px2rem(40px));
      color: #ffffff;
      span{
        padding: 0 px2rem(4px);
        margin: px2rem(3px) 0;
        @include font(px2rem(24px), px2rem(34px));
        height: px2rem(34px);
        color: #ffffff;
        margin-right: px2rem(8px);
        @include borderRadius(px2rem(4px))
      }
      .new{
        background: lightgreen;
      }
      .vip{
        background: lightcoral;
      }
    }
    .activeSize{
      @include font(px2rem(24px), px2rem(40px));
      color: #ffffff;
      position: absolute;
      top: px2rem(20px);
      right: px2rem(20px);
    }
  }
  .scroll-nav-wrapper{
    position: absolute;
    width: 100%;
    top: px2rem(410px);
    left: 0;
    bottom: px2rem(80px);
    background: #ffffff;
    /deep/ .cube-scroll-wrapper{
      width: 100%;
    }
    /deep/ .cube-scroll-nav-bar{
      width: px2rem(160px);
      background: #eeeeee;
      white-space: normal;
      overflow: hidden;
    }
    /deep/ .cube-scroll-nav-bar-item{
      padding: 0 px2rem(20px);
      display: flex;
      align-items: center;
      justify-content: center;
      height: px2rem(80px);
      font-size: px2rem(24px);
      .text{
        flex: 1;
        position: relative;
      }
      .num{
        position: absolute;
        right: -8px;
        top: -10px;
      }
      .support-ico{
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
      }
    }
    /deep/ .cube-scroll-nav-bar-item_active{
      background: #ffffff;
      color: lightsalmon;
    }
    /deep/ .cube-scroll-nav-panel-title{
      padding-left: 14px;
      height: px2rem(80px);
      line-height: px2rem(80px);
      font-size: 12px;
      color: #409EFF;
      font-weight: bold;
      background: #ffffff;
    }
    .food-item{
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      position: relative;
      border-bottom: 1px solid #eeeeee;
      &:last-child{
      margin-bottom: 0;
      }
      .icon{
        flex: 0 0 57px;
        margin-right: 10px;
        img{
          height: auto
        }
      }
      .content{
        flex: 1;
        .name{
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: #ddd;
        }
        .desc, .extra{
          line-height: 10px;
          font-size: 12px;
          color: #ddd;
        }
        .desc{
          line-height: 12px;
          margin-bottom: 8px;
        }
      .extra{
        .count{
          margin-right: 12px;
        }
      }
       .price{
         font-weight: 700;
         line-height: 24px;
         .now{
           margin-right: 8px;
           font-size: 12px;
           color: red;
         }
         .old{
           text-decoration: line-through;
           font-size: 12px;
           color: #ddd;
         }
       }
      }
      .cart-control-wrapper{
        position: absolute;
        right: 0;
        bottom: 12px;
      }
    }
    .shop-cart-wrapper{
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 50;
      width: 100%;
      height: 48px;
    }
  }
</style>
