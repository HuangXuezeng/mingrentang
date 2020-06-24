<template>
    <div>
        <div class="container">
          <!-- 搜索栏 -->
          <Searchs></Searchs>
          <div class="img">
            <div @click="goInfo">玉华奖</div>
          </div>
        </div>
    </div>
</template>
<script>
import Searchs from '@/components/search'
export default {
  data () {
    return {
    };
  },
  methods:{
    goInfo(){
      this.$router.push({name:'celebrityPrize'})
    }
  },
  components:{
    Searchs
  }
}
</script>
<style lang="stylus" scoped>
  .container{
    width 100%
    height 100%
    .img{
      width 100%
      height 100vh
      background url('../../assets/shan.jpg')
      background-size: 100% 100%
      div{
        height 60px
        line-height 60px
        width 60px
        border-radius 50%
        text-align center
        background-color pink
      }
    }
  }
</style>