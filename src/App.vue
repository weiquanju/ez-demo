<template>
  <div id="app">
    <ezPlayerVue v-bind="liveParam" v-if="liveParam.token" />
  </div>
</template>

<script>
import ezPlayerVue from './components/ez-player.vue';
import {getToken} from './utils.js'

export default {
  name: "App",
  components: {
    ezPlayerVue,
  },
  async mounted(){
    const token = await getToken()
    this.liveParam.token = token
  },
  data() {
    return {
      liveParam: {
        id: 1,
        // 高空全景摄像机萤石sdk使用的accessToken
        token:
          "",
        // 高空全景摄像机萤石sdk直播地址
        url: "ezopen://open.ys7.com/F11575776/1.live",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
  height: 450px;
}
</style>
