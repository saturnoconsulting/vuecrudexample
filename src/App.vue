<template>
<div class="wrapper">
  <router-view :key="$route.path"/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}



</script>




<style>

.wrapper{
  width: 100%;
  overflow: hidden;
}


</style>
