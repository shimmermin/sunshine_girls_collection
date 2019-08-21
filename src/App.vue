<template>
  <div id="app">
   <div>
      <router-view></router-view><!--必须有路由显示区域-->
   </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background: url('./img/register_img.jpg');
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 667px;
}


</style>
