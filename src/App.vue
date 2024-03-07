<template>
<div class="wrapper">
  <router-view :key="$route.path"/>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}



</script>




<style>

.wrapper{
  width: 100%;
  overflow: hidden;
}


</style>
