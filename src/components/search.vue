<template>
    <!-- 搜索框组件 -->
    <van-search v-model="value" @click="search" placeholder="请输入搜索关键词" />
</template>
<script>
import { Search } from 'vant'
export default {
  name:'s-search',
  data () {
    return {
        value: ''
    };
  },
  methods:{
    search(){
      console.log(this.value)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>