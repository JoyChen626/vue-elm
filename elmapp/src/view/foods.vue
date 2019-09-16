<template>
    <div class="foods">
      <div class="title">
        <div class="center title-box">
          <span class="back"></span>
          <span class="word">美食</span>
        </div>
        <div class="nav clear">
          <div class="picker" @click="showPicker1">{{picker1}}</div>
          <div class="picker" @click="showPicker2">{{picker2}}</div>
          <div class="picker" @click="showDrawer">Show Drawer</div>
          <cube-drawer
            ref="drawer"
            title="请选择"
            :data="data"
            :selected-index="selectedIndex"
            @change="changeHandler"
            @select="selectHandler"
            @cancel="cancelHandler">
          </cube-drawer>
        </div>
      </div>
      <foods-list :lists="lists" :positionTop="top"></foods-list>
    </div>
</template>

<script>
import foodsList from '../components/list'
let cityList = [{
  text: 'text',
  value: 'value'
}];let areaList = [{
  text: 'text',
  value: 'value'
}];
export default {
  name: 'foods',
  components: {foodsList},
  data () {
    return {
      lists: [
        {
          id: 1,
          piao: true,
          bao: true,
          img: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
          score: 4.3,
          num: 466,
          name: '中国标准时间中国标准时间中国标准时间',
          min: 15,
          run: 5,
          juli: 1.9,
          time: 50
        },
        {
          id: 2,
          img: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
          score: 4.3,
          num: 466,
          name: '中国标准时间',
          min: 15,
          run: 5,
          juli: 1.9,
          time: 50
        },
        {id: 3, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg', score: 4.3, num: 466, name: '中国标准时间', min: 15, run: 5, juli: 1.9, time: 50}, {id: 1, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg', score: 4.3, num: 466,name: '中国标准时间', min: 15, run: 5, juli: 1.9, time: 50}, {id: 2, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg', score: 4.3, num: 466, name: '中国标准时间', min: 15, run: 5, juli: 1.9, time: 50}, {id: 3, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg', score: 4.3, num: 466, name: '中国标准时间', min: 15, run: 5, juli: 1.9, time: 50}],
      top: 155 / 37.5,
      pickerType: 0,
      picker1: '美食',
      columu1: [{text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }],
      picker2: '排序',
      columu2: [{text: '距离', value: '距离'}, { text: '最新', value: '最新' }, { text: '好评', value: '好评' }, { text: '最热', value: '最热' }],
      selectedIndex: [],
      data: [
        [ {
          text: 'text',
          value: 'value'
        }],
        [],
        []
      ]
    }
  },
  methods: {
    showPicker1 () {
      this.pickerType = 1;
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '美食',
          swipeTime: 500,
          data: [this.columu1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    showPicker2 () {
      this.pickerType = 2;
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '排序',
          swipeTime: 500,
          data: [this.columu2],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
      console.log(222)
      if (this.pickerType == 1) {
        this.picker1 = selectedVal + ':' + selectedIndex + ':' + selectedText;
      } else if (this.pickerType == 2) {
        this.picker2 = selectedVal + ':' + selectedIndex + ':' + selectedText;
      }
    },
    cancelHandle () {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    },
    showDrawer () {
      this.$refs.drawer.show()
    },
    changeHandler (index, item, selectedVal, selectedIndex, selectedText) {
      // fake request
      setTimeout(() => {
        let data;
        if (index === 0) {
          // procince change, get city data
          data = cityList[item.value]
        } else {
          // city change, get area data
          data = areaList[item.value]
        }
        // refill panel(index + 1) data
        this.$refs.drawer.refill(index + 1, data)
      }, 200)
    },
    selectHandler (selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandler () {
      console.log('cancel')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~css/mixin";
  .foods{
    background: #eeeeee;
  }
  .title{
    height: px2rem(95px);
    background: #409EFF;
    text-align: center;
    .title-box{
      position: relative;
    }
    .back{
      position: absolute;
      @include wh(px2rem(40px), px2rem(40px));
      margin-top: px2rem(22.5px);
      top:0;
      left: 0;
    }
    .word{
      @include font(px2rem(28px), px2rem(95px));
      color: #ffffff;
    }
  }
  .nav{
    background: #ffffff;
    .picker{
      float: left;
      width: 33%;
      @include font(px2rem(28px), px2rem(60px));
      text-align: center;
      border-right: 1px solid #eeeeee;
      &:last-child{
        border-right: none;
      }
    }
  }

</style>
