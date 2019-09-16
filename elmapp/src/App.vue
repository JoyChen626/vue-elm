<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~css/common.scss";
.icon {
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
