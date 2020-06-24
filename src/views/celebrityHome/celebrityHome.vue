<template>
    <div>
        <!-- 搜索栏 -->
        <Searchs></Searchs>
        <!-- 轮播图banner -->
        <div>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
        <div class="title">
            <span class="border"></span>
            <span style="font-weight:900">股份荣誉</span>
            <span class="more">更多<i>></i></span>
        </div>
        <div class="itemsbox">
            <div>标题</div>
            <div>标题</div>
            <div>标题</div>
            <div>标题</div>
        </div>
        <div class="title">
            <span class="border"></span>
            <span style="font-weight:900">单位荣誉</span>
            <span class="more">更多<i>></i></span>
        </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
import Searchs from '@/components/search'
export default {
  data () {
    return {
        value: ''
    };
  },
  components:{
    Searchs
  }
}
</script>
<style lang="stylus" scoped>
    .my-swipe .van-swipe-item {
        color #fff
        font-size 20px
        line-height 150px
        text-align center
        background-color #39a9ed
    }
    .title{
        padding 10px 0 0 10px
        .border{
            border-left 4px solid orange
            padding-right 10px
        }
        .more{
            float right
            padding-right 10px
            color #ccc
        }
    }
    .itemsbox{
        display flex
        flex-direction: row
        flex-wrap wrap
        padding 10px
        justify-content: space-between
        div{
            width 48%
            height 100px
            background-color pink
            margin-top: 10px;
        }
    }
</style>