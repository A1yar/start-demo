<template>
  <div class="hello">
    Index
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$api.default.GET_CONFIG)
    this.postAxios('https://api.apiopen.top/musicRankings').then(res => {})
  }
}
</script>
