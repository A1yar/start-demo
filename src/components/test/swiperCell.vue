<template>
  <div class="swiperCell">
    <van-swipe-cell :left-width="200">
      <template slot="left">
        <p @click="handleChecke()">审核中</p>
        <p>招标中</p>
        <p>未审核</p>
        <p>未审核</p>
        <p>未审核</p>
        <p>未审核</p>
        <p>未审核</p>
      </template>
      <van-cell-group>
        <van-cell>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
          <h1>是是是</h1>
        </van-cell>
      </van-cell-group>
    </van-swipe-cell>
  </div>
</template>
<script>
export default {
  name: 'swiper-cell',
  data () {
    return {

    }
  },
  methods: {
    handleChecke () {
      console.log(6666)
    }
  }
}
</script>
