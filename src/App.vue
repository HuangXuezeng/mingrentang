<template>
  <div id="app">
    <div class="container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
    <m-tab></m-tab>
  </div>
</template>

<script>
import { Search } from 'vant'
import MTab from '@/components/m-tab'
import { setDDConfig } from '@/api/dd'
import { mapMutations } from 'vuex'
import fetch from '@/api/fetch'
export default {
  name: 'app',
  data(){
    return{
      value: ''
    }
  },
  created () {
    // 获取用户 id
    setDDConfig().then(res => {
      var that = this
      let data = res
      var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
      if (!is_mobi) {
        // PC
        console.log('pc')
        DingTalkPC.ready(() => {
          DingTalkPC.runtime.permission.requestAuthCode({
              corpId: data.corpId, //企业ID
              onSuccess: function(result) {
                let url = '/kukacms/visitor/getDingUserInfo.htm?accessToken=' + data.token + '&code=' + result.code
                fetch({
                  url: url,
                  method: 'get'
                }).then(res => {
                  console.log(res)
                  that.save_userId(res.data.userId)
                })
              },
              onFail: function(err) {
                window.location.reload()
              }
          })
        })
      } else {
        // 移动
        console.log('mobile')
        dd.ready(() => {
          dd.ui.webViewBounce.disable()
          dd.runtime.permission.requestAuthCode({
            corpId: data.corpId,
            onSuccess: function(result) {
              let url = '/kukacms/visitor/getDingUserInfo.htm?accessToken=' + data.token + '&code=' + result.code
              fetch({
                url: url,
                method: 'get'
              }).then(res => {
                console.log(res)
                that.save_userId(res.data.userId)
              })
            },
            onFail : function(err) {
              window.location.reload()
            }
          })
        })
      }

    })
  },
  methods: {
    ...mapMutations({
      save_userId: 'save_userId'
    })
  },
  components: {
    MTab    
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  max-width: 420px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
}
.container {
  height: 92vh;
  overflow: hidden;
  /* overflow-y: auto; */
}
*{
  -webkit-overflow-scrolling: touch;
}
</style>
