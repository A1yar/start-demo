<template>
  <div id="Dome">
    <p>12</p>
  </div>
</template>

<script>

import api from '@assets/api/constant'

export default {
  name: 'Dome',
  data () {
    return {
    }
  },
  mounted () {
    console.log(api)
  }
}
</script>

<style lang="scss" scoped>
#Dome{
  width: 200px;
  height: 200px;
  background-color: #000;
  p{
    width: 50px;
    height: 50px;
    background-color: red;
  }
}
</style>
