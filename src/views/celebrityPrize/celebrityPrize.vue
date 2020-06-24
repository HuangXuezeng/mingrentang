<template>
    <div>
        <div class="container">
            <!-- 搜索栏 -->
          <Searchs></Searchs>
          <!-- banner部分 -->
          <div class="banner">banner</div>
          <!-- 描述部门 -->
          <div class="introduction">描述</div>
          <!-- 标签页内容 -->
          <div class="content">
            <van-tabs v-model="active">
                <van-tab title="2016">
                    <div class="infocontent">
                        <div class="info_left">头像</div>
                        <div class="info_right">标题内容简介</div>
                    </div>
                    <div class="infocontent">
                        <div class="info_left">头像</div>
                        <div class="info_right">标题内容简介</div>
                    </div>
                    <div class="infocontent">
                        <div class="info_left">头像</div>
                        <div class="info_right">标题内容简介</div>
                    </div>
                </van-tab>
                <van-tab title="2017">
                    <div class="infocontent">
                        内容2
                    </div>
                </van-tab>
                <van-tab title="2018">
                    <div class="infocontent">
                        内容3
                    </div>
                </van-tab>
                <van-tab title="2019">
                    <div class="infocontent">
                        内容4
                    </div>
                </van-tab>
                <van-tab title="2020">
                    <div class="infocontent">
                        内容5
                    </div>
                </van-tab>
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
    .content{
        .infocontent{
            display flex
            padding 20px 10px 0 10px
            .info_left{
                flex 1
                height 100px
                width 100%
                background-color pink
            }
            .info_right{
                flex 2
                height 100px
                width 100%
                background-color orange
            }
        }
    }
</style>