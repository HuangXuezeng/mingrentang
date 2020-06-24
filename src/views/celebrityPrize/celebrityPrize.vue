<template>
    <div>
        <div class="container">
            <!-- 搜索栏 -->
          <Searchs></Searchs>
          <div class="banner">banner</div>
          <div class="introduction">描述</div>
          <div class="content">
            <van-tabs v-model="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab>
                <van-tab title="标签 5">内容 5</van-tab>
            </van-tabs>
          </div>
        </div>
    </div>
</template>
<script>
import Searchs from '@/components/search'
import { Tab, Tabs } from 'vant'
export default {
  data () {
    return {
        active: 0
    };
  },
  components:{
    Searchs
  }
}
</script>
<style lang="stylus" scoped>
    .banner{
        width 100%
        height 100px
        background-color pink
    }
    .introduction{
        width 100%
        height 120px
        background-color skyblue
    }
</style>